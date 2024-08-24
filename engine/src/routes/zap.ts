import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';
import { GENERIC } from '../constants/error-messages';
import { STATUS_CODES } from '../constants/status-codes';

export const zapRouter = express.Router();
const prismaClient = new PrismaClient();

zapRouter.post('', async (req, res) => {
  try {
    const { trigger, actions } = req.body;

    const zap = await prismaClient.zap.create({
      data: {
        trigger: {
          create: {
            availableTriggerId: trigger.availableTriggerId,
            eventId: trigger.eventId,
          },
        },
        actions: {
          create: actions.map((x: any) => ({
            availableActionId: x.availableActionId,
            eventId: x.eventId,
          })),
        },
      },
      select: {
        trigger: { select: { trigger: true } },
        actions: { select: { action: true } },
      },
    });

    res.json({ success: true, zap });
  } catch (err) {
    console.log('Create Zap Failed', err);
    return res
      .status(STATUS_CODES.ServiceUnavailable)
      .json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});

zapRouter.get('', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const zap = await prismaClient.zap.findMany({
      where: { userId: userId },
      select: {
        actions: { select: { action: true } },
        trigger: { select: { trigger: true } },
      },
    });

    res.json({ success: true, zap });
  } catch (err) {
    console.log('Get All User Zaps Failed', err);
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
