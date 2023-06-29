"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const checkport_1 = require("./checkport");
const student_1 = require("./repository/student");
const studenthdler_1 = require("./handler/studenthdler");
async function main() {
    const db = new client_1.PrismaClient();
    let bedCon = false;
    db.$connect().catch((err) => {
        bedCon = true;
        console.error(`cant connect ${err}`);
    });
    if (bedCon) {
        return;
    }
    const server = (0, express_1.default)();
    const port = 8000;
    const repoStudent = (0, student_1.newRepositoryStudent)(db);
    const handlerStudent = (0, studenthdler_1.newHandlerStudent)(repoStudent);
    server.use(express_1.default.json());
    const studentRouter = express_1.default.Router();
    const statusRouter = express_1.default.Router();
    server.use("/studant", studentRouter);
    server.use("/status", statusRouter);
    studentRouter.post("/fullname", handlerStudent.addStudaneName.bind(handlerStudent));
    //Check Status port
    statusRouter.get("/", checkport_1.checkstatus);
    //Port Listen
    server.listen(port, () => console.log(`Server runing on port ${port}`));
}
main();
//# sourceMappingURL=index.js.map