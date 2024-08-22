/*
  Warnings:

  - You are about to drop the column `description` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Trigger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "description",
ADD COLUMN     "event" TEXT;

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "description",
ADD COLUMN     "event" TEXT;
