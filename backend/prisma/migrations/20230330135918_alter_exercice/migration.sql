/*
  Warnings:

  - Added the required column `class` to the `Exercice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Exercice` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "video" TEXT,
    "image" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Exercice" ("createdAt", "id", "image", "name", "updatedAt", "video") SELECT "createdAt", "id", "image", "name", "updatedAt", "video" FROM "Exercice";
DROP TABLE "Exercice";
ALTER TABLE "new_Exercice" RENAME TO "Exercice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
