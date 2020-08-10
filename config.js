const { NODE_ENV } = process.env;

const DB_HOST = process.env.DB_HOST || 'mongodb://localhost:27017/newsdb';

const JWT_SECRET = NODE_ENV === 'production'
  ? process.env.JWT_SECRET
  : 'secret-key';

const PORT = process.env.PORT || 3000;

module.exports = {
  DB_HOST,
  JWT_SECRET,
  PORT,
};
