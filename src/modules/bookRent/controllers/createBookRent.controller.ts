import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import ICreateBookRentRequestDTO from "../dtos/createBookRentRequest.dto";
import CreateBookRentService from "../services/createBookRent.service";

export default class CreateBookRentController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new CreateBookRentService();
    const requestData: ICreateBookRentRequestDTO = request.body;
    const data = await service.execute(requestData, request.loggedUser);
    return response.json(data);
  }
}
