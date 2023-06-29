/*
  Warnings:

  - You are about to drop the column `name` on the `Student_name` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Frist_Name]` on the table `Student_name` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Last_Name]` on the table `Student_name` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Frist_Name` to the `Student_name` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Last_Name` to the `Student_name` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classroomId` to the `Student_name` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Student_name_name_key";

-- AlterTable
ALTER TABLE "Student_name" DROP COLUMN "name",
ADD COLUMN     "Frist_Name" TEXT NOT NULL,
ADD COLUMN     "Last_Name" TEXT NOT NULL,
ADD COLUMN     "classroomId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_Frist_Name_key" ON "Student_name"("Frist_Name");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_Last_Name_key" ON "Student_name"("Last_Name");
