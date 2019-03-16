import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  rights: string[];
}
