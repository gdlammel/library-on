import {Router} from "express";
import CreateBookController from "./controllers/createBook.controller";
import DeleteBookController from "./controllers/deleteBook.controler";
import ShowBooksController from "./controllers/showBooks.controller";
import UpdateBookController from "./controllers/updateBook.controller";

const bookRouter = Router();

const createBookController = new CreateBookController();
const showBooksController = new ShowBooksController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

bookRouter.get("/", showBooksController.handle);
bookRouter.post("/", createBookController.handle);
bookRouter.put("/:id", updateBookController.handle);
bookRouter.delete("/:id", deleteBookController.handle);
export default bookRouter;
