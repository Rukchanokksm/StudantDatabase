import express, { Response } from "express";

const server = express();

server.use(express.json());

//Check Status port
export async function checkstatus(_, res: Response) {
  return res.status(200).json({ status: "ok" }).end();
}
