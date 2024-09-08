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

  await prismaClient.event.createMany({
    data: [
      {
        name: 'Send Email',
        availableActionsId: gmailAction.id,
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
}

main();
