/*
  Warnings:

  - You are about to drop the column `actionId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `triggerId` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "actionId",
DROP COLUMN "triggerId";
