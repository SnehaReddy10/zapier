import express from 'express';
import { PrismaClient } from '@prisma/client';
import { STATUS_CODES } from '../constants/status-codes';
import { GENERIC } from '../constants/error-messages';

export const adminRouter = express.Router();
const prismaClient = new PrismaClient();

adminRouter.post('/availableTrigger', async (req, res) => {
  try {
    const { trigger, events, metaData, imgUrl } = req.body;

    const availableTrigger = await prismaClient.availableTriggers.create({
      data: { trigger, metaData, image: imgUrl },
    });

    events.map(async (event: any) => {
      await prismaClient.event.create({
        data: { name: event.name, availableTriggersId: availableTrigger.id },
      });
    });

    const newTrigger = await prismaClient.availableTriggers.findFirst({
      where: { id: availableTrigger.id },
      select: { trigger: true, events: true },
    });

    res.json({ success: true, availableTrigger, event: newTrigger });
  } catch (err) {
    console.log('Add Available Trigger Failed', err);
    return res
      .status(STATUS_CODES.ServiceUnavailable)
      .json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});

adminRouter.post('/availableAction', async (req, res) => {
  try {
    const { action, events, metaData, imgUrl } = req.body;

    const availableAction = await prismaClient.availableActions.create({
      data: { action, metaData, image: imgUrl },
    });

    events.map(async (event: any) => {
      await prismaClient.event.create({
        data: { name: event.name, availableActionsId: availableAction.id },
      });
    });

    const newTrigger = await prismaClient.availableActions.findFirst({
      where: { id: availableAction.id },
      select: { action: true, events: true },
    });
    res.json({ success: true, availableAction, event: newTrigger });
  } catch (err) {
    console.log('Add Available Action Failed', err);
    return res
      .status(STATUS_CODES.ServiceUnavailable)
      .json({ success: false, message: GENERIC.ServiceUnavailable });
  }
});
