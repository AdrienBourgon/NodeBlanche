export default class Exception {
  private message: string;
  private statusCode: number;
  private data: any;

  constructor(message: string, statusCode: number = 500, data: any = {}) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  public StatusCode(): number {
    return this.statusCode;
  }
}