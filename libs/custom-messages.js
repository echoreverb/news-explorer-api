const errorMessage = {
  wrongCredentials: 'Wrong email or password',
  articleNotFound: 'This article cannot be found',
  userNotFound: 'User cannot be found',
  forbiddenDeleteArticle: 'You are allowed to remove only your own articles',
  incorrectArticleId: 'Incorrect articleId',
  incorrectUserId: 'Incorrect userId',
  internalServerErr: 'Internal server error',
  pageNotFound: 'Page cannot be found',
  notAuthorized: 'You need to login to access this page',
  notUniqueEmail: 'This email address is already being used',
};

const successMessage = {
  articleDeleted: 'The article has been successfully removed',
};

module.exports = {
  errorMessage,
  successMessage,
};
