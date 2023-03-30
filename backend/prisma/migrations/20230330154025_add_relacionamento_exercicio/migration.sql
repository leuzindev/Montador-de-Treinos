/*
  Warnings:

  - You are about to drop the column `category` on the `Exercice` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" INTEGER,
    CONSTRAINT "Exercice_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Exercice" ("createdAt", "description", "id", "image", "name", "updatedAt", "video") SELECT "createdAt", "description", "id", "image", "name", "updatedAt", "video" FROM "Exercice";
DROP TABLE "Exercice";
ALTER TABLE "new_Exercice" RENAME TO "Exercice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
