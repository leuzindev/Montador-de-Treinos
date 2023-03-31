/*
  Warnings:

  - You are about to drop the `WorkoutPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WorkoutPlan";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Technique" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
