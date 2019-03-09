import { DBInterface } from '../Infrastructure/Typings/DBInterface';
import Communication from '../Services/Communication';

export default abstract class Command<T> {
  protected db: DBInterface;

  constructor() {
    this.db = Communication.getDB();
  }

  public abstract Handle(model: T): any;
}