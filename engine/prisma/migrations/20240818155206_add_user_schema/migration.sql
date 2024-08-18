-- AlterTable
ALTER TABLE "Zap" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zaps" (
    "zapId" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "zapRun" (
    "zapId" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "zaps_zapId_key" ON "zaps"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "zaps_userId_key" ON "zaps"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_zapId_key" ON "zapRun"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_userId_key" ON "zapRun"("userId");

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
