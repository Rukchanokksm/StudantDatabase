import { PrismaClient } from "@prisma/client";
import express from "express";
import { checkstatus } from "./checkport";
import { newRepositoryStudent } from "./repository/student";
import { newHandlerStudent } from "./handler/studenthdler";

async function main() {
  const db = new PrismaClient();

  let bedCon = false;
  db.$connect().catch((err) => {
    bedCon = true;
    console.error(`cant connect ${err}`);
  });

  if (bedCon) {
    return;
  }

  const server = express();

  const port = 8000;

  const repoStudent = newRepositoryStudent(db);
  const handlerStudent = newHandlerStudent(repoStudent);

  server.use(express.json());
  const studentRouter = express.Router();
  const statusRouter = express.Router();
  server.use("/studant", studentRouter);
  server.use("/status", statusRouter);

  studentRouter.post(
    "/fullname",
    handlerStudent.addStudaneName.bind(handlerStudent),
  );

  //Check Status port
  statusRouter.get("/", checkstatus);
  //Port Listen
  server.listen(port, () => console.log(`Server runing on port ${port}`));
}
main();
