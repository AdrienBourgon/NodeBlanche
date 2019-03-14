import Exception from "./Exception";

export default function exceptionHandler(err, req, res, next) {
  if(err instanceof Exception) {
    return res.status(err.StatusCode()).json(err);
  }

  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    Message: 'Something went wrong'
  });  
}
