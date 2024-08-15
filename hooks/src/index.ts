import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prismaClient = new PrismaClient();

app.post('/:userId/:zapId', (req, res) => {
  const { userId, zapId } = req.params;
  console.log(userId, zapId);

  res.json({ success: true });
});

app.listen(3001, () => console.log('Listening on port 3001'));
