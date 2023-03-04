import prisma from "../../../shared/prisma";
import Service from "../../../shared/abstract_classes/service";

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
    if (!searchInfo) {
      const allBooks = await prisma.book.findMany();
      return allBooks;
    }
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
