import {Router} from "express";

const routes = Router();

routes.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

export default routes;
