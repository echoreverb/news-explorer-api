const validatorCheck = require('validator');
const ValidationError = require('../errors/validation-error');

const isValidUrl = (value) => {
  if (!validatorCheck.isURL(value)) {
    throw new ValidationError(`${value} is not a valid URL`);
  }
  return value;
};

module.exports = isValidUrl;
