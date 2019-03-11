import Communication from '../Services/Communication';
import { Sequelize } from 'sequelize-typescript';

export default abstract class Command<T> {
  protected db: Sequelize;

  constructor() {
    this.db = Communication.getDB();
  }

  public abstract Handle(model: T): any;
}