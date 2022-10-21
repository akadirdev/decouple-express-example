import { NextFunction, Request, Response } from "express";

export interface IService {
  getAllUsers(): Promise<IUser[]>;
}

export interface IController {
  getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  age?: number;
}
