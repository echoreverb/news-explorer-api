const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validatorCheck = require('validator');
const AuthError = require('../libs/errors/auth-error');
const { errormessage } = require('../libs/custom-messages');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator(v) {
        return validatorCheck.isEmail(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = async function findUserByCredentials(email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user) {
    return Promise.reject(new AuthError(errormessage.wrongCredentials));
  }
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    return Promise.reject(new AuthError(errormessage.wrongCredentials));
  }
  return user;
};

module.exports = mongoose.model('user', userSchema);
