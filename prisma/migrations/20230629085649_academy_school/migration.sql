-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "Club_name" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClubToStudent_name" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_Club_name_key" ON "Club"("Club_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ClubToStudent_name_AB_unique" ON "_ClubToStudent_name"("A", "B");

-- CreateIndex
CREATE INDEX "_ClubToStudent_name_B_index" ON "_ClubToStudent_name"("B");

-- AddForeignKey
ALTER TABLE "_ClubToStudent_name" ADD CONSTRAINT "_ClubToStudent_name_A_fkey" FOREIGN KEY ("A") REFERENCES "Club"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClubToStudent_name" ADD CONSTRAINT "_ClubToStudent_name_B_fkey" FOREIGN KEY ("B") REFERENCES "Student_name"("id") ON DELETE CASCADE ON UPDATE CASCADE;
