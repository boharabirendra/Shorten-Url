-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortUrlId" TEXT NOT NULL,
    "redirectUrl" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vistedHistory" (
    "id" SERIAL NOT NULL,
    "urlId" INTEGER NOT NULL,

    CONSTRAINT "vistedHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortUrlId_key" ON "Url"("shortUrlId");

-- AddForeignKey
ALTER TABLE "vistedHistory" ADD CONSTRAINT "vistedHistory_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
