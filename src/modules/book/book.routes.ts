import {Router} from "express";

const bookRouter = Router();

bookRouter.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

export default bookRouter;
