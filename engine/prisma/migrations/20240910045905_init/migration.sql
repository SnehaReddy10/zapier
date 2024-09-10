/*
  Warnings:

  - Added the required column `isRunning` to the `Zap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "isRunning" BOOLEAN NOT NULL;
