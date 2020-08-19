const NotFoundError = require('../libs/errors/not-found-error');
const { errorMessage } = require('../libs/custom-messages');

const throwNotFound = (req, res, next) => {
  next(new NotFoundError(errorMessage.pageNotFound));
};

module.exports = { throwNotFound };
