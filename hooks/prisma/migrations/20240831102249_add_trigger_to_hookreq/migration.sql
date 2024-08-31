/*
  Warnings:

  - You are about to drop the column `userId` on the `HookReq` table. All the data in the column will be lost.
  - Added the required column `triggerId` to the `HookReq` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HookReq" DROP CONSTRAINT "HookReq_userId_fkey";

-- AlterTable
ALTER TABLE "HookReq" DROP COLUMN "userId",
ADD COLUMN     "triggerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
