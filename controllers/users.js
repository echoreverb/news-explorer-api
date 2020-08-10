const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotUniqueError = require('../libs/errors/not-unique-error');
const { errorMessage, successMessage } = require('../libs/custom-messages');
const { JWT_SECRET } = require('../config');

// eslint-disable-next-line consistent-return
const createUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const created = await User.create({ email, password: hash, name });
    res.json({
      data: {
        email: created.email,
        name: created.name,
      },
    });
  } catch (e) {
    if (e.code === 11000) {
      return next(new NotUniqueError(errorMessage.notUniqueEmail));
    }
    next(e);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findUserByCredentials(email, password);
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: (7 * 24 * 3600000) });
    res.status(201).send({ message: successMessage.userAuthorized });
  } catch (e) {
    next(e);
  }
};

const getUser = async (req, res, next) => {
  try {
    const found = await User.findById({ _id: req.user._id }).orFail();
    res.json({
      data: {
        email: found.email,
        name: found.name,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createUser,
  login,
  getUser,
};
