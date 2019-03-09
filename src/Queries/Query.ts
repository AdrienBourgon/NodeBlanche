import { DBInterface } from '../Infrastructure/Typings/DBInterface';
import Communication from '../Services/Communication';

export default abstract class Query {
  protected db: DBInterface;

  constructor() {
    this.db = Communication.getDB();
  }

  public abstract Handle(): any;
}