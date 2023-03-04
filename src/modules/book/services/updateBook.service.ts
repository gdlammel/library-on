import CustomError from "../../../shared/customError";
import prisma from "../../../shared/prisma";
import Service from "../../../shared/service";
import IUpdateBookRequestDTO from "../dtos/updateBookRequest.dto";

export default class UpdateBookService extends Service {
  async execute(id: string, data: IUpdateBookRequestDTO) {
    try {
      const updatedBook = prisma.book.update({
        where: {
          id,
        },
        data,
      });

      return updatedBook;
    } catch (error) {
      console.log(error);
      throw new CustomError({
        status: 400,
        message: "Error updating book",
      });
    }
  }
}
