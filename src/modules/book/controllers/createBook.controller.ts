import Controller from "../../../shared/controller";
import {Request, Response} from "express";
import CreateBookService from "../services/createBook.service";
import ICreateBookRequestDTO from "../dtos/createBookRequest.dto";

export default class CreateBookController extends Controller {
  async handle(request: Request, response: Response) {
    const createBookService = new CreateBookService();
    const requestData: ICreateBookRequestDTO = request.body;
    const data = await createBookService.execute(requestData);
    return response.json(data);
  }
}
