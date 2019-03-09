import Query from '../Query';

export default class GetExamples extends Query {
  public Handle(): any {
    return this.db.Example.findAll({ raw: true });
  }
}