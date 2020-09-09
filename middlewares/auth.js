const jwt = require('jsonwebtoken');
const AuthError = require('../libs/errors/auth-error');
const { errorMessage } = require('../libs/custom-messages');
const { JWT_SECRET } = require('../config');

const auth = async (req, res, next) => {
  const cookie = req.cookies.jwt;
  if (!cookie) {
    return next(new AuthError(errorMessage.notAuthorized));
  }
  let payload;
  try {
    payload = jwt.verify(cookie, JWT_SECRET);
  } catch (e) {
    return next(new AuthError(errorMessage.notAuthorized));
  }
  req.user = payload;
  return next();
};

module.exports = auth;
