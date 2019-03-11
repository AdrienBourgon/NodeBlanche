export default class Communication {
  private static db = undefined;

  public static setDB(db) {
    Communication.db = db;
  }
  public static getDB() {
    return Communication.db;
  }
}