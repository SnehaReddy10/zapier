/*
  Warnings:

  - Added the required column `metadata` to the `zapRun` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `zaps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "eventId" TEXT,
ADD COLUMN     "metadata" TEXT;

-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "eventId" TEXT;

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "zapRun" ADD COLUMN     "metadata" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "zaps" ADD COLUMN     "metadata" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "availableTriggersId" TEXT,
    "availableActionsId" TEXT,
    "metaData" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HookReq" (
    "id" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "availableTriggersId" TEXT NOT NULL,

    CONSTRAINT "HookReq_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableActionsId_fkey" FOREIGN KEY ("availableActionsId") REFERENCES "AvailableActions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
