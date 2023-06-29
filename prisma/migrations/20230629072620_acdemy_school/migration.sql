/*
  Warnings:

  - You are about to drop the `Club_Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Club_Room" DROP CONSTRAINT "Club_Room_StudentId_fkey";

-- DropTable
DROP TABLE "Club_Room";
