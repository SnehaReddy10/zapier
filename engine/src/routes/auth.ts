import express from 'express';
import { PrismaClient } from '@prisma/client';
import {
  GENERIC,
  USER_ERROR_CODE,
  USER_ERROR_MESSAGE,
} from '../constants/error-messages';
import { STATUS_CODES } from '../constants/status-codes';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../config';
import { createUserSchema, loginUserSchema } from '../schemas/auth-schema';

export const authRouter = express.Router();
const prismaClient = new PrismaClient();

authRouter.post('/signup', async (req, res) => {
  try {
    const { email, firstname, lastname, password } = req.body;

    const { success, error } = createUserSchema.safeParse({
      email,
      firstname,
      lastname,
      password,
    });

    if (!success) {
      return res
        .status(STATUS_CODES.BadRequest)
        .json({ success: false, error: error.errors.map((x) => x.message) });
    }

    const existingUser = await prismaClient.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return res.status(STATUS_CODES.BadRequest).json({
        success: false,
        error: {
          message: USER_ERROR_MESSAGE.ALREADY_EXISTS,
          code: USER_ERROR_CODE.ALREADY_EXISTS,
        },
      });
    }

    const newUser = await prismaClient.user.create({
      data: { email, firstname, lastname, password },
    });

    const token = jwt.sign({ id: newUser.id, email }, JWT_TOKEN);

    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS_CODES.ServiceUnavailable)
      .json({ success: true, error: GENERIC.ServiceUnavailable });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const { success, error } = loginUserSchema.safeParse({
      email,
      password,
    });

    if (!success) {
      return res
        .status(STATUS_CODES.BadRequest)
        .json({ success: true, error: error.errors.map((x) => x.message) });
    }

    const user = await prismaClient.user.findFirst({
      where: { email, password },
    });

    if (!user) {
      return res.status(STATUS_CODES.NotFound).json({
        success: false,
        error: {
          message: USER_ERROR_MESSAGE.NOT_FOUND,
          code: USER_ERROR_CODE.NOT_FOUND,
        },
      });
    }

    const token = jwt.sign({ id: user.id, email }, JWT_TOKEN);

    res.json({ success: true, token });
  } catch (err) {
    console.log(err);
    return res
      .status(STATUS_CODES.ServiceUnavailable)
      .json({ success: true, error: GENERIC.ServiceUnavailable });
  }
});
