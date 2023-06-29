/*
  Warnings:

  - You are about to drop the column `msg` on the `Classroom` table. All the data in the column will be lost.
  - Added the required column `Room` to the `Classroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Std_Name` to the `Classroom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classroom" DROP COLUMN "msg",
ADD COLUMN     "Room" TEXT NOT NULL,
ADD COLUMN     "Std_Name" TEXT NOT NULL;
