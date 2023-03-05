import {Request, Response} from "express";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import Controller from "../../../shared/abstract_classes/controller";
import ICreateUserRequestDTO from "../dtos/createUserRequest.dto";
import CreateUserService from "../services/createUser.service";

export default class CreateUserController implements Controller {
  async handle(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>
  ): Promise<any> {
    const service = new CreateUserService();
    const requestData: ICreateUserRequestDTO = request.body;
    const data = await service.execute(requestData);
    return response.json(data);
  }
}
