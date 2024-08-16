import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prismaClient = new PrismaClient();

app.post('/:userId/:zapId', async (req, res) => {
  try {
    const { userId, zapId } = req.params;

    const [zaps, zapRuns] = await prismaClient.$transaction([
      prismaClient.zaps.create({ data: { zapId, userId } }),
      prismaClient.zapRun.create({ data: { zapId, userId } }),
    ]);

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

app.listen(3001, () => console.log('Listening on port 3001'));
