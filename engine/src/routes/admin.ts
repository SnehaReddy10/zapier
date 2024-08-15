import express from 'express';
import { PrismaClient } from '@prisma/client';

export const adminRouter = express.Router();
const prismaClient = new PrismaClient();

adminRouter.post('/availableTrigger', async (req, res) => {
  const { trigger, metaData } = req.body;

  const availableTrigger = await prismaClient.availableTriggers.create({
    data: { trigger, metaData },
  });
  res.json({ success: true, availableTrigger });
});

adminRouter.post('/availableAction', async (req, res) => {
  const { action, metaData } = req.body;

  const availableAction = await prismaClient.availableActions.create({
    data: { action, metaData },
  });
  res.json({ success: true, availableAction });
});
