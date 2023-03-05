import {Router} from "express";
import bookRouter from "./modules/book/book.routes";
import userRouter from "./modules/user/user.routes";

const routerMapper = Router();

routerMapper.use("/books", bookRouter);
routerMapper.use("/users", userRouter);

export {routerMapper};
