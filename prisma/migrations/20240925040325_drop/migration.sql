/*
  Warnings:

  - You are about to drop the `vistedHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "vistedHistory" DROP CONSTRAINT "vistedHistory_urlId_fkey";

-- AlterTable
ALTER TABLE "Url" ADD COLUMN     "vistedTimes" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "vistedHistory";
