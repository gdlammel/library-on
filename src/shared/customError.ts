interface ICustomError {
  status: number;
  message: string;
}

export default class CustomError extends Error {
  customError: ICustomError;
  constructor(customError: ICustomError) {
    super();
    this.customError = customError;
  }
}
