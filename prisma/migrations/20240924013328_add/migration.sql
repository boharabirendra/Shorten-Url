-- DropForeignKey
ALTER TABLE "vistedHistory" DROP CONSTRAINT "vistedHistory_urlId_fkey";

-- AddForeignKey
ALTER TABLE "vistedHistory" ADD CONSTRAINT "vistedHistory_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
