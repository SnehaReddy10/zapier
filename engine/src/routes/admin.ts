import express from 'express';
import { PrismaClient } from '@prisma/client';

export const adminRouter = express.Router();
const prismaClient = new PrismaClient();

adminRouter.post('/availableTrigger', async (req, res) => {
  const { trigger, events, metaData } = req.body;

  const availableTrigger = await prismaClient.availableTriggers.create({
    data: { trigger, metaData },
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
});

adminRouter.post('/availableAction', async (req, res) => {
  const { action, metaData } = req.body;

  const availableAction = await prismaClient.availableActions.create({
    data: { action, metaData },
  });
  res.json({ success: true, availableAction });
});
