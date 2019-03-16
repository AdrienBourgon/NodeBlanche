import GetUser from '../Queries/Authentication/GetUser';

export default {
  getUser: (req, res, next) => {
    new GetUser(undefined).Handle(req)
      .then(data => {
        res.json(data);
      }
      ).catch (err => next(err));
  }
}