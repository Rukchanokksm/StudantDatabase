import { Response } from "express";

import { IRepositoryStudent } from "../repository/student";

import { empty, KepstdName, AppRequest } from "./letstudent";

export interface handlerStudentName {
  addStudaneName(
    req: AppRequest<empty, KepstdName>,
    res: Response,
  ): Promise<Response>;
}

export function newHandlerStudent(
  Repo: IRepositoryStudent,
): handlerStudentName {
  return new HandlerStdent(Repo);
}

class HandlerStdent implements handlerStudentName {
  private repo: IRepositoryStudent;

  constructor(repo: IRepositoryStudent) {
    this.repo = repo;
  }

  //Create Frist name and Last name get data from https
  async addStudaneName(
    req: AppRequest<any, KepstdName>,
    res: Response,
  ): Promise<Response> {
    const { Frist_Name, Last_Name } = req.body;
    if (!Frist_Name || !Last_Name) {
      return res
        .status(400)
        .json({ err: `"Fill frist or last name" ${Frist_Name} ${Last_Name}` })
        .end();
    }
    return this.repo
      .createStudent({ Frist_Name, Last_Name })
      .then((fullname: any) =>
        res
          .status(201)
          .json({ ...fullname })
          .end(),
      )
      .catch((err: any) => {
        const errMsg = `failed to create user ${Frist_Name} or ${Last_Name}`;
        console.error(`${errMsg}: ${err}`);
        return res.status(500).json({ error: errMsg }).end();
      });
  }
}
