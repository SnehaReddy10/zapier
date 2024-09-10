import { PrismaClient } from '@prisma/client';
import { Kafka } from 'kafkajs';
import { sendEmail } from './email/sendEmail';

const TOPIC_NAME = 'zap-events';

const kafka = new Kafka({
  clientId: 'sweeper',
  brokers: ['localhost:9092'],
});

const prismaClient = new PrismaClient();

const kafkaConsumer = kafka.consumer({ groupId: 'worker' });

async function main() {
  await kafkaConsumer.connect();

  await kafkaConsumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await kafkaConsumer.run({
    eachMessage: async ({ message }) => {
      let { userId, zapId, metadata } = JSON.parse(
        message.value?.toString() || ''
      );
      const zap = await prismaClient.zap.findFirst({
        where: { userId, id: zapId, isRunning: true },
        include: {
          actions: true,
          trigger: true,
        },
      });

      if (zap) {
        zap.actions.map(async (x: any) => {
          const event = await prismaClient.event.findFirst({
            where: { id: x.eventId },
          });
          if (event?.name == 'Send Email') {
            const payload = JSON.parse(x.metadata);
            const eventMetadata = JSON.parse(event?.metaData || '');

            const req: any = {};
            metadata = JSON.parse(metadata);

            Object.keys(eventMetadata).map((x: any) => {
              req[x] = metadata[payload[x]];
            });

            sendEmail(req);
          }
        });
      }
    },
  });

  await new Promise((r) => setTimeout(r, 3000));
}

main();
