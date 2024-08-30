import express from 'express';
import { PrismaClient } from '@prisma/client';
import { adminRouter } from './routes/admin';
import { triggerRouter } from './routes/trigger';
import { zapRouter } from './routes/zap';
import { actionRouter } from './routes/action';
import { authRouter } from './routes/auth';
import cors from 'cors';
import { authMiddleware } from './middleware/auth';
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const prismaClient = new PrismaClient();

async function main() {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/admin', adminRouter);
  app.use('/api/v1/trigger', triggerRouter);
  app.use('/api/v1/action', actionRouter);
  app.use('/api/v1/zap', authMiddleware, zapRouter);
}

main()
  .then(async () => await prismaClient.$disconnect())
  .catch(async (error) => {
    console.log(error);
    await prismaClient.$disconnect();
  });

app.listen(3005, () => console.log('Listening on port 3005'));
