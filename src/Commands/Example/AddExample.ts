import { ExampleAttributes } from '../../Models/Example';
import Command from '../Command';

export default class AddExample extends Command<ExampleAttributes> {
  public Handle(example: ExampleAttributes): any {
    return this.db.sequelize.transaction((t) => {
      return this.db.Example.create(example);
    });
  }
}