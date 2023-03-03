-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "details" TEXT NOT NULL,
    "publishYear" INTEGER NOT NULL,
    "author" VARCHAR(60) NOT NULL,
    "publishingCompany" VARCHAR(60) NOT NULL,
    "isbn" VARCHAR(20) NOT NULL,
    "quantityInStock" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
