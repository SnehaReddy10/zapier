import express from 'express';
import { PrismaClient } from '@prisma/client';

export const actionRouter = express.Router();
const prismaClient = new PrismaClient();

actionRouter.post('/', async (req, res) => {
  const { action, zapId } = req.body;

  const newAction = await prismaClient.action.create({
    data: { action, zapId },
  });
  res.json({ success: true, newAction });
});

actionRouter.get('/availableActions', async (req, res) => {
  const availableActions = await prismaClient.availableActions.findMany();
  return res.json({ success: true, availableActions });
});
