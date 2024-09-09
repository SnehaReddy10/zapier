-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "metaData" TEXT;

-- CreateTable
CREATE TABLE "HookReq" (
    "id" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "availableTriggersId" TEXT NOT NULL,

    CONSTRAINT "HookReq_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
