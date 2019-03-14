import * as express from 'express';
import ExampleController from '../Controllers/ExampleController';

const router = express.Router();

router
  .get('/', (req, res, next) => {
    ExampleController.getAll(req, res, next);
  })
  .post('/', (req, res, next) => {
    ExampleController.add(req, res, next);
  });

module.exports = router;
