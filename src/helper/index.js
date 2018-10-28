
class HTTPError extends Error {
  constructor(message, details, statusCode) {
    super();
    this.message = message;
    this.details = details;
    this.statusCode = statusCode;
  }
}

class InvalidParameterError extends HTTPError {
  constructor(details) {
    super('Invalid Request', details, 400);
  }
}


class NotFoundError extends HTTPError {
  constructor(details) {
    super('Resource Not Found', details, 404);
  }
}

class ServerError extends HTTPError {
  constructor(details) {
    super('Internal Server Error', details, 500);
  }
}

const errorHandler = (error) => {
  switch (error.statusCode) {
    case (400):
      return new InvalidParameterError('Invalid Params');
    case (404):
      return new NotFoundError('Item Not Found');
    default:
      return new ServerError('Internal Server Error');
  }
};

module.exports = {
  HTTPError,
  InvalidParameterError,
  NotFoundError,
  ServerError,
  errorHandler
};
