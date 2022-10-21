import { inject } from "@decouplejs/core";
import { NextFunction, Request, Response } from "express";
import { IController, IService } from "../interfaces";
import { LOG_SERVICE, USER_SERVICE } from "../keys";
import { LogService } from "../services";

export class UserController implements IController {
  @inject(USER_SERVICE)
  private userService: IService;

  @inject(LOG_SERVICE)
  private logger: LogService;

  async getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      this.logger.log("UserController:getAllUsers");
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }
}
