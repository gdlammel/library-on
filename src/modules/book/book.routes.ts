import {Router} from "express";
import CreateBookController from "./controllers/createBook.controller";

const bookRouter = Router();

const createBookController = new CreateBookController();

bookRouter.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

bookRouter.post("/", createBookController.handle);

export default bookRouter;
