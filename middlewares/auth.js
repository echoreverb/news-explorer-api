const jwt = require('jsonwebtoken');
const AuthError = require('../libs/errors/auth-error');
const { errorMessage } = require('../libs/custom-messages');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AuthError(errorMessage.notAuthorized));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secret-key');
  } catch (e) {
    return next(new AuthError(errorMessage.notAuthorized));
  }
  req.user = payload;
  return next();
};

module.exports = auth;
