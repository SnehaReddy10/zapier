/*
  Warnings:

  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Event_id_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
