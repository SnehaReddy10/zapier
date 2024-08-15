import express from 'express';
import { PrismaClient } from '@prisma/client';

export const zapRouter = express.Router();
const prismaClient = new PrismaClient();

zapRouter.post('', async (req, res) => {
  const { trigger, actions } = req.body;

  const zap = await prismaClient.zap.create({
    data: { trigger, actions },
  });
  res.json({ success: true, zap });
});
