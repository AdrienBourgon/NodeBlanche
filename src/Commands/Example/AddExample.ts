import Command from '../Command';
import Example from '../../Models/Example';

export default class AddExample extends Command<Example> {
  public Handle(example: Example): any {
    return this.db.transaction((t) => {
      return Example.build(example).save();
    });
  }
}