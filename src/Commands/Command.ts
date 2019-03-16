import Communication from '../Services/Communication';
import { Sequelize } from 'sequelize-typescript';
import User from '../Models/User';

export default abstract class Command<T> {
  protected db: Sequelize;
  protected user: User;

  constructor(user: User) {
    this.db = Communication.getDB();
    this.user = user;
  }

  public abstract Handle(model: T): any;
}