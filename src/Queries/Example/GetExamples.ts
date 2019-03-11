import Query from '../Query';
import Example from '../../Models/Example';

export default class GetExamples extends Query {
  public Handle(): any {
    return Example.findAll({ raw: true });
  }
}
