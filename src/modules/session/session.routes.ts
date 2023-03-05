import {Router} from "express";
import CreateSessionController from "./controllers/createSession.controller";

const sessionRouter = Router();

const createSessionController = new CreateSessionController();

sessionRouter.post("/", createSessionController.handle);

export default sessionRouter;
