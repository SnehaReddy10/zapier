import express from 'express';
import { PrismaClient } from '@prisma/client';
import { GENERIC, USER } from '../constants/error-messages';
import { STATUS_CODES } from '../constants/status-codes';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from '../config';
import { createUserSchema } from '../schemas/auth-schema';

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
        .json({ success: true, error: error.errors.map((x) => x.message) });
    }

    const existingUser = await prismaClient.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return res
        .status(STATUS_CODES.BadRequest)
        .json({ success: false, error: USER.ALREADY_EXISTS });
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
