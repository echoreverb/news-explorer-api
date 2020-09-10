const { NODE_ENV } = process.env;

const DB_HOST = NODE_ENV === 'production'
  ? process.env.DB_HOST
  : 'mongodb://localhost:27017/newsdb';

const JWT_SECRET = NODE_ENV === 'production'
  ? process.env.JWT_SECRET
  : 'secret-key';

const PORT = process.env.PORT || 3000;

const CORS_WHITELIST = NODE_ENV === 'production'
  ? ['https://echoreverb.github.io', 'https://news-explorer.host', 'http://news-explorer.host', 'http://178.154.254.114']
  : ['http://localhost:8080'];

module.exports = {
  DB_HOST,
  JWT_SECRET,
  PORT,
  CORS_WHITELIST,
};
