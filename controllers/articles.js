const mongoose = require('mongoose');
const Article = require('../models/article');
const ForbiddenError = require('../libs/errors/forbidden-error');
const NotFoundError = require('../libs/errors/not-found-error');
const ValidationError = require('../libs/errors/validation-error');
const { errorMessage, successMessage } = require('../libs/custom-messages');

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ owner: req.user._id }).orFail();
    res.json({ data: articles });
  } catch (e) {
    if (e.name === 'DocumentNotFoundError') {
      res.json({ data: [] });
      return;
    }
    next(e);
  }
};

const createArticle = async (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  const owner = req.user._id;
  try {
    const created = await Article.create({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner,
    });
    return res.json({
      data: {
        keyword: created.keyword,
        title: created.title,
        text: created.text,
        date: created.date,
        source: created.source,
        link: created.link,
        image: created.image,
      },
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      return next(new ValidationError(e.message));
    }
    return next(e);
  }
};

const deleteArticle = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.articleId)) {
    return next(new ValidationError(errorMessage.incorrectArticleId));
  }
  try {
    const found = await Article.findById({ _id: req.params.articleId }).select('+owner').orFail();
    if (req.user._id !== found.owner.toString()) {
      return next(new ForbiddenError(errorMessage.forbiddenDeleteArticle));
    }
    await Article.deleteOne({ _id: req.params.articleId });
    return res.json({ message: successMessage.articleDeleted });
  } catch (e) {
    if (e.name === 'DocumentNotFoundError') {
      return next(new NotFoundError(errorMessage.articleNotFound));
    }
    return next(e);
  }
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
