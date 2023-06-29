-- CreateTable
CREATE TABLE "Club_Room" (
    "id" SERIAL NOT NULL,
    "Std_Name" TEXT NOT NULL,
    "Club_name" TEXT NOT NULL,
    "StudentId" INTEGER NOT NULL,

    CONSTRAINT "Club_Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_Room_Club_name_key" ON "Club_Room"("Club_name");

-- AddForeignKey
ALTER TABLE "Club_Room" ADD CONSTRAINT "Club_Room_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "Student_name"("id") ON DELETE CASCADE ON UPDATE CASCADE;
