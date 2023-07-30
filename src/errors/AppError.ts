class AppError extends Error {

  public readonly statusCode: number;

  constructor(msg: string, statusCode: number = 400) {
    super(msg);
    this.statusCode = statusCode;
  }

}

export default AppError;