import express from 'express';
import { PrismaClient } from '@prisma/client';

export const triggerRouter = express.Router();
const prismaClient = new PrismaClient();

triggerRouter.post('/', async (req, res) => {
  const { trigger, zapId } = req.body;

  const newTrigger = await prismaClient.trigger.create({
    data: { trigger, zapId },
  });
  return res.json({ success: true, newTrigger });
});

triggerRouter.get('/availableTriggers', async (req, res) => {
  const availableTriggers = await prismaClient.availableTriggers.findMany();
  return res.json({ success: true, availableTriggers });
});

triggerRouter.get('/events/:triggerId', async (req, res) => {
  const triggerId = req.params.triggerId;

  const availableEvents = await prismaClient.event.findMany({
    where: { availableTriggersId: triggerId },
  });
  return res.json({ success: true, availableEvents });
});
