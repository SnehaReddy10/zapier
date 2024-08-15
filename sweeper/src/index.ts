import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  while (1) {
    const pendingZaps = await prismaClient.zapRun.findMany({
      take: 2,
    });

    console.log(pendingZaps);

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
