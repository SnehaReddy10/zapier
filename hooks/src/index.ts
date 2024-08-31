import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    userId: string;
  }
}

const app = express();
app.use(express.json());
app.use(cors());

const prismaClient = new PrismaClient();

app.post('/test-trigger/:triggerId', async (req, res) => {
  const payload = req.body;

  await prismaClient.hookReq.create({
    data: { payload: JSON.stringify(payload), triggerId: req.params.triggerId },
  });

  return res.json({ success: true });
});

app.get('/find-new-records/:triggerId', async (req, res) => {
  const records = await prismaClient.hookReq.findMany({
    where: { triggerId: req.params.triggerId },
  });
  return res.json({ success: true, records });
});

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
