import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

async function main() {
  const webookTrigegr = await prismaClient.availableTriggers.create({
    data: {
      trigger: 'WebHook',
      metaData: '',
      image:
        'https://a.slack-edge.com/80588/img/services/outgoing-webhook_512.png',
    },
  });

  await prismaClient.event.createMany({
    data: [
      {
        name: 'GET',
        availableTriggersId: webookTrigegr.id,
      },
      {
        name: 'POST',
        availableTriggersId: webookTrigegr.id,
      },
    ],
  });

  const gmailAction = await prismaClient.availableActions.create({
    data: {
      action: 'Gmail',
      metaData: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErM41hxSJduXUOiGzVUO5lOeuJAd0jfKVKw&s',
    },
  });

  const sendEmailMetaData = JSON.stringify({
    receiver: 1,
    subject: 1,
    body: 1,
  });

  await prismaClient.event.createMany({
    data: [
      {
        name: 'Send Email',
        availableActionsId: gmailAction.id,
        metaData: sendEmailMetaData,
      },
      {
        name: 'Draft Email',
        availableActionsId: gmailAction.id,
      },
    ],
  });

  const notionAction = await prismaClient.availableActions.create({
    data: {
      action: 'Notion',
      metaData: '',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWou-NqUry5V8MoXmHxuxeXS5wFlhjzPeF8w&s',
    },
  });

  await prismaClient.event.createMany({
    data: [
      {
        name: 'Update doc',
        availableActionsId: notionAction.id,
      },
    ],
  });

  await prismaClient.user.create({
    data: {
      email: 'test@gmail.com',
      firstname: 'test',
      lastname: 'test-test',
      password: 'testtest',
    },
  });
}

main();
