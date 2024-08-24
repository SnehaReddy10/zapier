/*
  Warnings:

  - You are about to drop the column `event` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `event` on the `Trigger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "event",
ADD COLUMN     "eventId" TEXT;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "event",
ADD COLUMN     "eventId" TEXT;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
