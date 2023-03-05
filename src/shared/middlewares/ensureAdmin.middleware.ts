import {Request, Response, NextFunction} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Middleware from "../abstract_classes/middleware";
import CustomError from "../customError";
import prisma from "../prisma";

export default class EnsureAdmin implements Middleware {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    const {loggedUser} = request;
    try {
      const isAdmin = await prisma.user.findUnique({
        where: {
          id: loggedUser,
        },
      });
      if (!isAdmin || isAdmin.role == "USER") {
        throw new Error();
      }
      return next();
    } catch (error) {
      throw new CustomError({status: 401, message: "Unauthorized"});
    }
  }
}
