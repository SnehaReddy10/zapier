import express from 'express';
import { PrismaClient } from '@prisma/client';
import { adminRouter } from './routes/admin';
import { triggerRouter } from './routes/trigger';
import { zapRouter } from './routes/zap';
import { actionRouter } from './routes/action';

const app = express();
app.use(express.json());
const prismaClient = new PrismaClient();

async function main() {
  app.use('/admin', adminRouter);
  app.use('/trigger', triggerRouter);
  app.use('/action', actionRouter);
  app.use('/zap', zapRouter);
}

main()
  .then(async () => await prismaClient.$disconnect())
  .catch(async (error) => {
    console.log(error);
    await prismaClient.$disconnect();
  });

app.listen(3000, () => console.log('Listening on port 3000'));
