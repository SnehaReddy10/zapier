/*
  Warnings:

  - Added the required column `userId` to the `HookReq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zapId` to the `HookReq` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HookReq" ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "zapId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
