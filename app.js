require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const limiter = require('./middlewares/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHander = require('./middlewares/error-handler');
const router = require('./routes/index');
const { PORT, DB_HOST } = require('./config');

const app = express();

app.use(limiter);
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errorHander);

async function start() {
  try {
    await mongoose.connect(DB_HOST, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      /* eslint no-console: ["error", { allow: ["log", "error"] }] */
      console.log(`Server is running on port:${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
