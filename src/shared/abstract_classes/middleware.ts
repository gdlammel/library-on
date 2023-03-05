import {Request, Response, NextFunction} from "express";

export default abstract class Middleware {
  abstract handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): void;
}
