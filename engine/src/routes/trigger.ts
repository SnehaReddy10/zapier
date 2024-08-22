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
  const avaibaleTriggers = await prismaClient.availableTriggers.findMany();
  return res.json({ success: true, avaibaleTriggers });
});
