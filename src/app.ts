import "dotenv/config";
import "express-async-errors";
import express, {Request, Response, NextFunction} from "express";
import {routerMapper as routes} from "./routes";
import CustomError from "./shared/customError";

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      return response
        .status(err.customError.status)
        .json({message: err.customError.message});
    }
    return response.sendStatus(500);
  }
);
export default app;
