import CustomError from "../../../shared/customError";
import prisma from "../../../shared/prisma";
import Service from "../../../shared/abstract_classes/service";
import IUpdateBookRequestDTO from "../dtos/updateBookRequest.dto";

export default class UpdateBookService implements Service {
  async execute(id: string, data: IUpdateBookRequestDTO) {
    if ("isbn" in data) {
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
    }
    try {
      const updatedBook = prisma.book.update({
        where: {
          id,
        },
        data,
      });

      return updatedBook;
    } catch (error) {
      throw new CustomError({
        status: 400,
        message: "Error updating book",
      });
    }
  }
}
