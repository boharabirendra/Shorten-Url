/*
  Warnings:

  - A unique constraint covering the columns `[urlId]` on the table `vistedHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "vistedHistory_urlId_key" ON "vistedHistory"("urlId");
