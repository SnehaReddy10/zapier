/*
  Warnings:

  - Added the required column `metadata` to the `zapRun` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metadata` to the `zaps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "metadata" TEXT;

-- AlterTable
ALTER TABLE "zapRun" ADD COLUMN     "metadata" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "zaps" ADD COLUMN     "metadata" TEXT NOT NULL;
