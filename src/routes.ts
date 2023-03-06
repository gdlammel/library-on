import {Router} from "express";
import bookRouter from "./modules/book/book.routes";
import userRouter from "./modules/user/user.routes";
import sessionRouter from "./modules/session/session.routes";
import bookRentRouter from "./modules/bookRent/bookRent.routes";

const routerMapper = Router();

routerMapper.use("/books", bookRouter);
routerMapper.use("/users", userRouter);
routerMapper.use("/session", sessionRouter);
routerMapper.use("/book-rent", bookRentRouter);

export {routerMapper};
