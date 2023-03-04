import {Router} from "express";
import CreateBookController from "./controllers/createBook.controller";
import ShowBooksController from "./controllers/showBooks.controller";
import UpdateBookController from "./controllers/updateBook.controller";

const bookRouter = Router();

const createBookController = new CreateBookController();
const showBooksController = new ShowBooksController();
const updateBookController = new UpdateBookController();

bookRouter.get("/", showBooksController.handle);
bookRouter.post("/", createBookController.handle);
bookRouter.put("/:id", updateBookController.handle);

export default bookRouter;
