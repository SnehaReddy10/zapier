/*
  Warnings:

  - You are about to drop the column `id` on the `zapRun` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `zaps` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[zapId]` on the table `zapRun` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `zapRun` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[zapId]` on the table `zaps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `zaps` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isRunning` to the `Zap` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "zapRun_id_key";

-- DropIndex
DROP INDEX "zaps_id_key";

-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "isRunning" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "zapRun" DROP COLUMN "id";

-- AlterTable
ALTER TABLE "zaps" DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_zapId_key" ON "zapRun"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_userId_key" ON "zapRun"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "zaps_zapId_key" ON "zaps"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "zaps_userId_key" ON "zaps"("userId");
