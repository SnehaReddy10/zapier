import { Kafka } from 'kafkajs';

const TOPIC_NAME = 'zap-events';

const kafka = new Kafka({
  clientId: 'sweeper',
  brokers: ['localhost:9092'],
});

const kafkaConsumer = kafka.consumer({ groupId: 'worker' });

async function main() {
  await kafkaConsumer.connect();

  await kafkaConsumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });

  await new Promise((r) => setTimeout(r, 3000));
}

main();
