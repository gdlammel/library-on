import {Router} from "express";
import bookRouter from "./modules/book/book.routes";

const routerMapper = Router();

routerMapper.use("/books", bookRouter);

export {routerMapper};
