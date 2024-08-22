import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';
import { GENERIC } from '../constants/error-messages';

export const zapRouter = express.Router();
const prismaClient = new PrismaClient();

zapRouter.post('', async (req, res) => {
  try {
    const { trigger, actions } = req.body;

    const zap = await prismaClient.zap.create({
      data: { trigger, actions },
    });
    res.json({ success: true, zap });
  } catch (err) {
    console.log('Create Zap Failed', err);
    return res.json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});

zapRouter.get('/:zapId', authMiddleware, async (req, res) => {
  try {
    const zapId = req.params.zapId;

    const zap = await prismaClient.zap.findFirst({
      where: { id: zapId, userId: req.userId },
      select: {
        User: true,
        trigger: true,
        actions: { select: { action: true } },
      },
    });
    res.json({ success: true, zap });
  } catch (err) {
    console.log('Create Zap By Id', err);
    return res.json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});
