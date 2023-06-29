import { enityStudent as EnityStudent } from "../enity/studenttp";
import { PrismaClient } from "@prisma/client";

//Find some Frist and last name from database
//Delete Student by id

interface PreStudent {
  Frist_Name: string;
  Last_Name: string;
  ClassroomId?: number;
  clubsIds?: number[] | undefined;
}

// interface FindStudent {
//   Frist_Name: string;
//   Last_Name: string;
//   ClassroomId: number;
// }

export interface IRepositoryStudent {
  createStudent(Student: PreStudent): Promise<EnityStudent>;
}

//Export func
export function newRepositoryStudent(db: PrismaClient): IRepositoryStudent {
  return new RepositoryStudent(db);
}

class RepositoryStudent {
  private db: PrismaClient;

  constructor(db: PrismaClient) {
    this.db = db;
  }

  //Create Student Frist and Last name Sand to database
  async createStudent(Student: PreStudent): Promise<EnityStudent> {
    return await this.db.student_name.create({
      data: {
        Frist_Name: Student.Frist_Name,
        Last_Name: Student.Last_Name,
        Classrooms: {
          connect: {
            id: Student.ClassroomId,
          },
        },
        Clubs: {
          connect: Student.clubsIds?.map((n) => {
            return { id: n };
          }),
        },
      },
    });
  }

  //Find Frist and last name from database
  //   async getStudent(Studentid: number): Promise<FindStudent> {
  //     const ListStudent = await this.db.student_name.findMany({
  //       where: {
  //         id: Studentid,
  //       },
  //     });
  // if(!ListStudent) {
  //   return console.log("not found")
  // }
  // return ListStudent
  //   }
}
