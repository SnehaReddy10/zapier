/*
  Warnings:

  - You are about to drop the column `metaData` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `metaData` on the `Trigger` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" DROP COLUMN "metaData";

-- AlterTable
ALTER TABLE "Trigger" DROP COLUMN "metaData";
