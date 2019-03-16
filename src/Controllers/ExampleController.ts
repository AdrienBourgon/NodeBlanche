import AddExample from '../Commands/Example/AddExample';
import GetExamples from '../Queries/Example/GetExamples';

export default {
  // Queries
  getAll: (req, res, next) => {
    new GetExamples(req.locals.user, req.query.filters).Handle()
      .then((data: any) => {
        res.json(data);
      })
      .catch(err => next(err));
  },
  // Commands
  add: (req, res, next) => {
    new AddExample(req.locals.user).Handle(req.body)
      .then((data) => {
        res.status(201).json({ id: data.dataValues.id });
      })
      .catch(err => next(err));
  },
}