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
            metadata: x.metaData,
          })),
        },
        userId: req.userId,
        isRunning: true,
      },
      select: {
        trigger: { select: { trigger: true } },
        actions: { select: { action: true } },
        userId: true,
        id: true,
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

    const zaps = await prismaClient.zap.findMany({
      where: { userId: userId },
      select: {
        actions: { select: { action: true } },
        trigger: { select: { trigger: true } },
        id: true,
      },
    });

    const restructuredZaps = zaps.map((x) => {
      const actions = x.actions.map((y) => y.action);
      return { ...x, actions, trigger: x.trigger?.trigger };
    });

    res.json({ success: true, zaps: restructuredZaps });
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
        id: true,
        User: true,
        trigger: {
          select: {
            event: true,
            trigger: true,
            id: true,
          },
        },
        actions: {
          select: { action: true, event: true, id: true },
        },
      },
    });

    const actions = zap?.actions.map((y) => ({
      ...y.action,
      event: y.event,
      eventName: y.event?.name,
    }));

    res.json({
      success: true,
      zap: {
        ...zap,
        actions,
        trigger: {
          ...zap?.trigger?.trigger,
          event: zap?.trigger?.event,
          eventName: zap?.trigger?.event?.name,
        },
      },
    });
  } catch (err) {
    console.log('Create Zap By Id', err);
    return res.json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});

zapRouter.post('/toggle/:zapId', authMiddleware, async (req, res) => {
  try {
    const zapId = req.params.zapId;
    const zap = await prismaClient.zap.findFirst({ where: { id: zapId } });
    if (!zap) {
      return res
        .status(STATUS_CODES.BadRequest)
        .json({ success: false, message: 'Zap Not Found' });
    }
    await prismaClient.zap.update({
      where: { id: zapId },
      data: { isRunning: !zap.isRunning },
    });

    return res.json({ success: true });
  } catch (err) {
    console.log('Create Zap By Id', err);
    return res.json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});
