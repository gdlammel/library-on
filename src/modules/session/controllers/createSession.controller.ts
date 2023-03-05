import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import ICreateSessionRequestDTO from "../dtos/CreateSessionRequest.dto";
import CreateSessionService from "../services/createSession.service";

export default class CreateSessionController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new CreateSessionService();
    const requestData: ICreateSessionRequestDTO = request.body;

    const data = await service.execute(requestData);

    return response.json(data);
  }
}
