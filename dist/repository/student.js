"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRepositoryStudent = void 0;
//Export func
function newRepositoryStudent(db) {
    return new RepositoryStudent(db);
}
exports.newRepositoryStudent = newRepositoryStudent;
class RepositoryStudent {
    constructor(db) {
        this.db = db;
    }
    //Create Student Frist and Last name Sand to database
    async createStudent(Student) {
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
}
//# sourceMappingURL=student.js.map