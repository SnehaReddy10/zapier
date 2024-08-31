/*
  Warnings:

  - You are about to drop the column `triggerId` on the `HookReq` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "HookReq" DROP CONSTRAINT "HookReq_triggerId_fkey";

-- AlterTable
ALTER TABLE "HookReq" DROP COLUMN "triggerId";
