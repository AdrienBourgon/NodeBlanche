import * as express from 'express';
import ExampleController from '../Controllers/ExampleController';

const router = express.Router();

router
  .get('/', (req, res) => {
    ExampleController.getAll(req, res);
  })
  .post('/', (req, res) => {
    ExampleController.add(req, res);
  });

module.exports = router;
