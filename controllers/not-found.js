const NotFoundError = require('../libs/errors/not-found-error');
const { errormessage } = require('../libs/custom-messages');

const throwNotFound = (req, res, next) => {
  next(new NotFoundError(errormessage.pageNotFound));
};

module.exports = { throwNotFound };
