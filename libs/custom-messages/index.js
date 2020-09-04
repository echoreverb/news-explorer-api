const errorMessage = {
  wrongCredentials: 'Неправильные почта или пароль',
  articleNotFound: 'Статья не найдена',
  userNotFound: 'Пользователь не найден',
  forbiddenDeleteArticle: 'Вам разрешено удалять только собственные карточки',
  incorrectArticleId: 'Неправильный articleId',
  incorrectUserId: 'Неправильный userId',
  internalServerErr: 'Ошибка на стороне сервера',
  pageNotFound: 'Страница не найдена',
  notAuthorized: 'Вам нужно войти, чтобы получить доступ',
  notUniqueEmail: 'Пользователь с такой почтой уже зарегистрирован',
};

const errorMessageEn = {
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
  articleDeleted: 'Статья успешно удалена',
  userAuthorized: 'Вход выполнен успешно',
};

const successMessageEn = {
  articleDeleted: 'The article has been successfully removed',
  userAuthorized: 'Authorization successful',
};

module.exports = {
  errorMessage,
  errorMessageEn,
  successMessage,
  successMessageEn,
};
