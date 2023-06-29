/*
  Warnings:

  - You are about to drop the `_ClassroomToStudent_name` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClassroomToStudent_name" DROP CONSTRAINT "_ClassroomToStudent_name_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassroomToStudent_name" DROP CONSTRAINT "_ClassroomToStudent_name_B_fkey";

-- DropTable
DROP TABLE "_ClassroomToStudent_name";

-- AddForeignKey
ALTER TABLE "Student_name" ADD CONSTRAINT "Student_name_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
