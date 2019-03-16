import * as express from 'express';
import AuthenticationController from '../Controllers/AuthenticationController';

const router = express.Router();

router
  .post('/', (req, res, next) => {
    AuthenticationController.getUser(req, res, next);
  });

module.exports = router;