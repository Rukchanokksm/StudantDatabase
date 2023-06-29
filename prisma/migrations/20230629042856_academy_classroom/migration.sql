/*
  Warnings:

  - A unique constraint covering the columns `[Std_Name]` on the table `Classroom` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Room]` on the table `Classroom` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Classroom_Std_Name_key" ON "Classroom"("Std_Name");

-- CreateIndex
CREATE UNIQUE INDEX "Classroom_Room_key" ON "Classroom"("Room");
