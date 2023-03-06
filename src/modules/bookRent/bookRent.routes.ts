import {Router} from "express";
import EnsureAuthenticated from "../../shared/middlewares/ensureAuthenticated.middleware";
import CreateBookRentController from "./controllers/createBookRent.controller";

const bookRentRouter = Router();

const createBookRentController = new CreateBookRentController();
const ensureAuthenticated = new EnsureAuthenticated();

bookRentRouter.post(
  "/",
  ensureAuthenticated.handle,
  createBookRentController.handle
);

export default bookRentRouter;
