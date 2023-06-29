/*
  Warnings:

  - You are about to drop the column `StudentId` on the `Classroom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_StudentId_fkey";

-- AlterTable
ALTER TABLE "Classroom" DROP COLUMN "StudentId";

-- CreateTable
CREATE TABLE "_ClassroomToStudent_name" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassroomToStudent_name_AB_unique" ON "_ClassroomToStudent_name"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassroomToStudent_name_B_index" ON "_ClassroomToStudent_name"("B");

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent_name" ADD CONSTRAINT "_ClassroomToStudent_name_A_fkey" FOREIGN KEY ("A") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent_name" ADD CONSTRAINT "_ClassroomToStudent_name_B_fkey" FOREIGN KEY ("B") REFERENCES "Student_name"("id") ON DELETE CASCADE ON UPDATE CASCADE;
