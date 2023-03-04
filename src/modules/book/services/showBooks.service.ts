import prisma from "../../../shared/prisma";
import Service from "../../../shared/service";

const booksReturnInformations = {
  id: true,
  title: true,
  author: true,
  details: true,
  isbn: true,
  publishingCompany: true,
  publishYear: true,
};

export default class ShowBooksService extends Service {
  async execute(searchInfo: string) {
    const book = await prisma.book.findUnique({
      where: {
        isbn: searchInfo,
      },
      select: booksReturnInformations,
    });

    if (book) {
      return book;
    }

    const books = await prisma.book.findMany({
      where: {
        title: {
          contains: searchInfo,
        },
      },
      select: booksReturnInformations,
    });

    return books;
  }
}
