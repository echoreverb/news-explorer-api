const { isCelebrate } = require('celebrate');
const { errorMessage } = require('../libs/custom-messages');

const errorHander = (err, req, res, next) => {
  if (isCelebrate(err)) {
    const { statusCode = 400, message } = err;
    res.status(statusCode).send({ message });
    return;
  }
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? errorMessage.internalServerErr
      : message,
  });
  next();
};

module.exports = errorHander;
