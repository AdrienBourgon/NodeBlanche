import {Table, Column, Model, PrimaryKey, BeforeCreate, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import * as uuid from 'uuid/v4';

@Table
export default class Example extends Model<Example> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  text: string;

  @Column
  something?: string;
  
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
  
  @BeforeCreate
  static function(instance: Example) {
    instance.id = uuid();
  }
}
