/*
  Warnings:

  - Added the required column `userId` to the `Historic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutId` to the `Historic` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Workout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "WorkoutExercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workoutId" INTEGER NOT NULL,
    "exerciceId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WorkoutExercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorkoutExercise_exerciceId_fkey" FOREIGN KEY ("exerciceId") REFERENCES "Exercice" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Historic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workoutId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Historic_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Historic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Historic" ("id") SELECT "id" FROM "Historic";
DROP TABLE "Historic";
ALTER TABLE "new_Historic" RENAME TO "Historic";
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
    CONSTRAINT "Exercice_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Exercice_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Exercice" ("categoryId", "createdAt", "description", "id", "image", "name", "updatedAt", "video") SELECT "categoryId", "createdAt", "description", "id", "image", "name", "updatedAt", "video" FROM "Exercice";
DROP TABLE "Exercice";
ALTER TABLE "new_Exercice" RENAME TO "Exercice";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
