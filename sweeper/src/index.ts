import { PrismaClient } from '@prisma/client';
import { Kafka } from 'kafkajs';

const TOPIC_NAME = 'zap-events';

const prismaClient = new PrismaClient();
const kafka = new Kafka({
  clientId: 'sweeper',
  brokers: ['localhost:9092'],
});

const kafkaProducer = kafka.producer();

async function main() {
  await kafkaProducer.connect();
  while (1) {
    const pendingZaps = await prismaClient.zapRun.findMany({
      take: 2,
    });

    await kafkaProducer.send({
      topic: TOPIC_NAME,
      messages: pendingZaps.map((x) => {
        return { value: x.zapId };
      }),
    });

    await prismaClient.zapRun.deleteMany({
      where: {
        zapId: {
          in: pendingZaps.map((x) => x.zapId),
        },
      },
    });

    await new Promise((r) => setTimeout(r, 3000));
  }
}

main();
