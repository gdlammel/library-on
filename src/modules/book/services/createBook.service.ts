import Service from "../../../shared/abstract_classes/service";
import ICreateBookRequestDTO from "../dtos/createBookRequest.dto";
import prisma from "../../../shared/prisma";
import CustomError from "../../../shared/customError";

export default class CreateBookService extends Service {
  async execute(data: ICreateBookRequestDTO) {
    if (!data.title || !data.author || !data.isbn) {
      throw new CustomError({
        status: 400,
        message: "Information is missing",
      });
    }
    const isbnAlreadyExists = await prisma.book.findUnique({
      where: {
        isbn: data.isbn,
      },
    });

    if (isbnAlreadyExists) {
      throw new CustomError({
        status: 400,
        message: "Isbn already registered",
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
