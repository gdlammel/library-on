import {Router} from "express";
import CreateUserController from "./controllers/createUser.controller";

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post("/", createUserController.handle);

export default userRouter;
