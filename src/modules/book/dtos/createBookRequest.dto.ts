export default interface ICreateBookRequestDTO {
  title: string;
  details: string;
  publishYear: number;
  author: string;
  publishingCompany: string;
  isbn: string;
  quantityInStock: number;
}
