-- CreateTable
CREATE TABLE "Classroom" (
    "id" SERIAL NOT NULL,
    "msg" TEXT NOT NULL,
    "StudentId" INTEGER NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student_name" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Student_name_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_name_key" ON "Student_name"("name");

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "Student_name"("id") ON DELETE CASCADE ON UPDATE CASCADE;
