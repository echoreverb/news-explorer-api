const router = require('express').Router();
const articles = require('./users');
const users = require('./articles');
const { throwNotFound } = require('../controllers/not-found');

router.use(users);
router.use(articles);
router.use(throwNotFound);

module.exports = router;
