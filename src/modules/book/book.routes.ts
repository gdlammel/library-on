import {Router} from "express";
import EnsureAdmin from "../../shared/middlewares/ensureAdmin.middleware";
import EnsureAuthenticated from "../../shared/middlewares/ensureAuthenticated.middleware";
import CreateBookController from "./controllers/createBook.controller";
import DeleteBookController from "./controllers/deleteBook.controler";
import ShowBooksController from "./controllers/showBooks.controller";
import UpdateBookController from "./controllers/updateBook.controller";

const bookRouter = Router();

const createBookController = new CreateBookController();
const showBooksController = new ShowBooksController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

const ensureAuthenticated = new EnsureAuthenticated();
const ensureAdmin = new EnsureAdmin();

bookRouter.get("/", ensureAuthenticated.handle, showBooksController.handle);

bookRouter.use(ensureAuthenticated.handle, ensureAdmin.handle);

bookRouter.post("/", createBookController.handle);
bookRouter.put("/:id", updateBookController.handle);
bookRouter.delete("/:id", deleteBookController.handle);
export default bookRouter;
