"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newHandlerStudent = void 0;
function newHandlerStudent(Repo) {
    return new HandlerStdent(Repo);
}
exports.newHandlerStudent = newHandlerStudent;
class HandlerStdent {
    constructor(repo) {
        this.repo = repo;
    }
    //Create Frist name and Last name get data from https
    async addStudaneName(req, res) {
        const { Frist_Name, Last_Name } = req.body;
        if (!Frist_Name || !Last_Name) {
            return res.status(400).json({ err: "Fill frist or last name" }).end();
        }
        return this.repo
            .createStudent({ Frist_Name, Last_Name })
            .then((fullname) => res
            .status(201)
            .json({ ...fullname })
            .end())
            .catch((err) => {
            const errMsg = `failed to create user ${Frist_Name} or ${Last_Name}`;
            console.error(`${errMsg}: ${err}`);
            return res.status(500).json({ error: errMsg }).end();
        });
    }
}
//# sourceMappingURL=Student.js.map