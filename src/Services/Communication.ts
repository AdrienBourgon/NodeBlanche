import { DBInterface } from 'Infrastructure/Typings/DBInterface';

export default class Communication {
  private static db: DBInterface = undefined;

  public static setDB(db: DBInterface) {
    Communication.db = db;
  }
  public static getDB(): DBInterface {
    return Communication.db;
  }
}