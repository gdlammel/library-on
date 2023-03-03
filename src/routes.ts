import {Router} from "express";

const routerMapper = Router();

routerMapper.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

export {routerMapper};
