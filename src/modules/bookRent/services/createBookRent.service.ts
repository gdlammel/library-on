import Service from "../../../shared/abstract_classes/service";
import CustomError from "../../../shared/customError";
import prisma from "../../../shared/prisma";
import ICreateBookRentRequestDTO from "../dtos/createBookRentRequest.dto";

export default class CreateBookRentService implements Service {
  async execute(data: ICreateBookRentRequestDTO, loggedUser: string) {
    data.giveBack = new Date(data.giveBack);

    if (loggedUser != data.userId) {
      throw new CustomError({
        status: 401,
        message: "User not authorized",
      });
    }

    const haveStock = await prisma.book.findUnique({
      where: {
        id: data.bookId,
      },
      select: {
        quantityInStock: true,
      },
    });
    if (!haveStock) {
      throw new CustomError({
        status: 400,
        message: "Book not found",
      });
    }
    if (haveStock.quantityInStock <= 0) {
      throw new CustomError({
        status: 400,
        message: "Book not available",
      });
    }

    if (data.giveBack <= new Date()) {
      throw new CustomError({
        status: 400,
        message: "Invalid book return date",
      });
    }
    try {
      const [newBookRent, _] = await prisma.$transaction([
        prisma.bookRent.create({
          data,
        }),
        prisma.book.update({
          where: {
            id: data.bookId,
          },
          data: {
            quantityInStock: haveStock.quantityInStock - 1,
          },
        }),
      ]);
      return newBookRent;
    } catch (error) {
      throw new CustomError({status: 400, message: "Error creating book rent"});
    }
  }
}
