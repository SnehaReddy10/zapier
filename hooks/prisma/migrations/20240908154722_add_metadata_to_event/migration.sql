/*
  Warnings:

  - You are about to drop the column `metaData` on the `HookReq` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "metaData" TEXT;

-- AlterTable
ALTER TABLE "HookReq" DROP COLUMN "metaData";
