-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card_sus" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_card_sus_key" ON "User"("card_sus");
