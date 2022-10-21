import { inject } from "@decouplejs/core";
import { IService, IUser } from "../interfaces";
import { LOG_SERVICE } from "../keys";
import { LogService } from "./log.service";

export class UserService implements IService {
  constructor(
    @inject(LOG_SERVICE)
    private logger: LogService
  ) {}

  async getAllUsers(): Promise<IUser[]> {
    this.logger.log("UserService:getAllUsers");
    return [
      {
        id: 1,
        name: "john",
        email: "john@mail.com",
        age: 20,
      },
    ];
  }
}
