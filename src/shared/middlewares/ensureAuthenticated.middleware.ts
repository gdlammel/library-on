import {Request, Response, NextFunction} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Middleware from "../abstract_classes/middleware";
import CustomError from "../customError";
import {verify} from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export default class EnsureAuthenticated implements Middleware {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    const authToken = request.headers.authorization;
    if (!authToken) {
      throw new CustomError({status: 401, message: "Invalid Token"});
    }
    const [_, token] = authToken.split(" ");
    try {
      const {sub} = verify(token, process.env.JWT_SECRET as string) as IPayload;
      request.loggedUser = sub;
      return next();
    } catch (error) {
      throw new CustomError({status: 401, message: "Unauthorized"});
    }
  }
}
