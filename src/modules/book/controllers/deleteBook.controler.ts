import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import DeleteBookService from "../services/deleteBook.service";

export default class DeleteBookController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new DeleteBookService();
    const {id} = request.params;
    const returnMsg = await service.execute(id);
    return response.sendStatus(200);
  }
}
