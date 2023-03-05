import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import IUpdateBookRequestDTO from "../dtos/updateBookRequest.dto";
import UpdateBookService from "../services/updateBook.service";

export default class UpdateBookController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new UpdateBookService();
    const {id} = request.params;
    const requestData: IUpdateBookRequestDTO = request.body;
    const data = await service.execute(id, requestData);
    return response.json(data);
  }
}
