import * as jwt from 'jsonwebtoken';
import * as AppConfig from '../Config/app.json';
import Exception from '../Infrastructure/Exception.js';

export default function(req, res, next) {
  if(!jwt.verify(req.headers.authorization, AppConfig.authentication.secret)) {
    throw new Exception("Authentication required");
  }
  req.locals = req.locals || {};
  req.locals.user = jwt.decode(req.headers.authorization)["user"];
  
  next();
}