import express from 'express';
import { PrismaClient } from '@prisma/client';

export const triggerRouter = express.Router();
const prismaClient = new PrismaClient();

triggerRouter.post('/', async (req, res) => {
  const { trigger, zapId } = req.body;

  const newTrigger = await prismaClient.trigger.create({
    data: { trigger, zapId },
  });
  res.json({ success: true, newTrigger });
});
