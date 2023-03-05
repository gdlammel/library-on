import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import ShowBooksService from "../services/showBooks.service";

export default class ShowBooksController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new ShowBooksService();
    const {search} = request.query;
    const data = await service.execute(search as string);
    return response.json(data);
  }
}
