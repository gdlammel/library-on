import Controller from "../../../shared/abstract_classes/controller";
import {Request, Response} from "express";
import CreateBookService from "../services/createBook.service";
import ICreateBookRequestDTO from "../dtos/createBookRequest.dto";

export default class CreateBookController extends Controller {
  async handle(request: Request, response: Response) {
    const service = new CreateBookService();
    const requestData: ICreateBookRequestDTO = request.body;
    const data = await service.execute(requestData);
    return response.json(data);
  }
}
