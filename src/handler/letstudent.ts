import { Request, Response } from "express";

// Custom Express `Request` (no Query)
export interface AppRequest<Params, Body> extends Request<Params, any, Body> {}

export interface empty {}

export interface KepstdName {
  Frist_Name: string;
  Last_Name: string;
}

export interface OnstudentName {
  Full_Name: (req: Request, res: Response) => Promise<Response>;
  Last_Name: (req: Request, res: Response) => Promise<Response>;
}
