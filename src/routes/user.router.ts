import { Router } from "express";
import { container } from "..";
import { UserController } from "../controllers";
import { USER_CONTROLLER } from "../keys";
export const userRouter = Router();

userRouter.get("/", async (req, res, next) => {
  container.get<UserController>(USER_CONTROLLER).getAllUsers(req, res, next);
});
