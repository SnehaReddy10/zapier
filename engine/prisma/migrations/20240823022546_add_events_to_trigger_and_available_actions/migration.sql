-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "actionId" TEXT,
    "triggerId" TEXT,
    "availableTriggersId" TEXT,
    "availableActionsId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableTriggersId_fkey" FOREIGN KEY ("availableTriggersId") REFERENCES "AvailableTriggers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_availableActionsId_fkey" FOREIGN KEY ("availableActionsId") REFERENCES "AvailableActions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
