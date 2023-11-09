/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "card_sus" INTEGER NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("card_sus", "id") SELECT "card_sus", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_card_sus_key" ON "User"("card_sus");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
