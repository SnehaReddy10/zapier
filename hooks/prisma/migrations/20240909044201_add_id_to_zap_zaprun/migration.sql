/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `zapRun` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `zaps` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `zapRun` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `zaps` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "zapRun_userId_key";

-- DropIndex
DROP INDEX "zapRun_zapId_key";

-- DropIndex
DROP INDEX "zaps_userId_key";

-- DropIndex
DROP INDEX "zaps_zapId_key";

-- AlterTable
ALTER TABLE "zapRun" ADD COLUMN     "id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "zaps" ADD COLUMN     "id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_id_key" ON "zapRun"("id");

-- CreateIndex
CREATE UNIQUE INDEX "zaps_id_key" ON "zaps"("id");
