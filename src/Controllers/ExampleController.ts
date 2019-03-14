import AddExample from '../Commands/Example/AddExample';
import GetExamples from '../Queries/Example/GetExamples';

export default {
  // Queries
  getAll: (req, res) => {
    new GetExamples(req.query.filters).Handle()
      .then((data: any) => {
        res.json(data);
      });
  },
  // Commands
  add: (req, res) => {
    new AddExample().Handle(req.body)
      .then((data) => {
        res.status(201).json({ id: data.dataValues.id });
      });
  },
}