-- CreateTable
CREATE TABLE "AvailableActions" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "metaData" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "AvailableActions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableTriggers" (
    "id" TEXT NOT NULL,
    "trigger" TEXT NOT NULL,
    "metaData" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "AvailableTriggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Zap" (
    "id" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Zap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "availableActionId" TEXT NOT NULL,
    "zapId" TEXT,
    "eventId" TEXT,
    "metadata" TEXT,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "availableTriggerId" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,
    "eventId" TEXT,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zaps" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "metadata" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "zapRun" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "metadata" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "availableTriggersId" TEXT,
    "availableActionsId" TEXT,
    "metaData" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HookReq" (
    "id" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "availableTriggersId" TEXT NOT NULL,

    CONSTRAINT "HookReq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "Trigger"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "zaps_id_key" ON "zaps"("id");

-- CreateIndex
CREATE UNIQUE INDEX "zapRun_id_key" ON "zapRun"("id");

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_availableActionId_fkey" FOREIGN KEY ("availableActionId") REFERENCES "AvailableActions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_availableTriggerId_fkey" FOREIGN KEY ("availableTriggerId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableActionsId_fkey" FOREIGN KEY ("availableActionsId") REFERENCES "AvailableActions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HookReq" ADD CONSTRAINT "HookReq_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
