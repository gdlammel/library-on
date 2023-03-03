import Service from "../../../shared/service";
import IRequestDTO from "../dtos/request.dto";
import prisma from "../../../shared/prisma";
import CustomError from "../../../shared/customError";

export default class CreateBookService extends Service {
  async execute(data: IRequestDTO) {
    if (!data.title || !data.author || !data.isbn) {
      throw new CustomError({
        status: 400,
        message: "Information is missing",
      });
    }

    try {
      const newBook = await prisma.book.create({
        data,
      });

      return newBook;
    } catch (error) {
      throw new CustomError({
        status: 400,
        message: "Error creating new book",
      });
    }
  }
}
