/*
  Warnings:

  - You are about to drop the `Historic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Workout` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkoutExercice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Historic";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Workout";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WorkoutExercice";
PRAGMA foreign_keys=on;

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
    "workoutId" INTEGER,
    CONSTRAINT "Exercice_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Exercice" ("categoryId", "createdAt", "description", "id", "image", "name", "updatedAt", "video", "workoutId") SELECT "categoryId", "createdAt", "description", "id", "image", "name", "updatedAt", "video", "workoutId" FROM "Exercice";
DROP TABLE "Exercice";
ALTER TABLE "new_Exercice" RENAME TO "Exercice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
