/*
  Warnings:

  - You are about to drop the column `triggerId` on the `HookReq` table. All the data in the column will be lost.
  - Added the required column `availableTriggersId` to the `HookReq` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HookReq" DROP CONSTRAINT "HookReq_triggerId_fkey";

-- AlterTable
ALTER TABLE "HookReq" DROP COLUMN "triggerId",
ADD COLUMN     "availableTriggersId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
