import Exception from "./Exception";

export default class BusinessException extends Exception {
  constructor(message: string){
    super(message);
  }
}