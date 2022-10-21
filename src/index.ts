import { Container } from "@decouplejs/core";
import express, { Express } from "express";
import { UserController } from "./controllers";
import { LOG_SERVICE, USER_CONTROLLER, USER_SERVICE } from "./keys";
import { userRouter } from "./routes";
import { LogService, UserService } from "./services";

export const container = new Container();
container.injectable(USER_SERVICE, UserService);
container.injectable(USER_CONTROLLER, UserController);
container.injectable(LOG_SERVICE, LogService);

const app: Express = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log(`Server is running at https://localhost:3000`);
});
