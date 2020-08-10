# News-Explorer API

Эта работа - бэкенд часть дипломного проекта News-Explorer - сервиса для поиска и сохранения новостей.

## Ссылки

- https://api.news-explorer.host
- http://api.news-explorer.host
- IP: 178.154.254.114

- исходный код: https://github.com/echoreverb/news-explorer-api

## Список запросов

- POST /signup - создаёт профиль пользователя { email, password, name }
- POST /signin - авторизирует пользователя { email, password }

- GET /users/me — возвращает { email, password } пользователя

- GET /articles — возвращает все статьи
- POST /articles — создаёт статью с переданными в теле { keyword, title, text, date, source, link, image }
- DELETE /articles/articleId — удаляет статью по идентификатору

## Установка

установка модулей npm

```shell
npm install
```

запуск сервера на `localhost:3000`

```shell
npm run start
```

запуск сервера на `localhost:3000` c хот-релоудом

```shell
npm run dev
```

## Используемые инструменты и сервисы

- стек: [Node.js](https://nodejs.org), [Express](https://expressjs.com), [MongoDB](https://www.mongodb.com), [Mongoose](https://mongoosejs.com)
- безопасность: [jwt](https://www.npmjs.com/package/jsonwebtoken), [bcrypt](https://www.npmjs.com/package/bcrypt), [helmet](https://helmetjs.github.io), [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- валидация данных: [Joi](https://hapi.dev/module/joi/)+[celebrate](https://github.com/arb/celebrate), [validator](https://www.npmjs.com/package/validator)
- логгирование: [Winston](https://www.npmjs.com/package/winston)
- размещение: [Яндекс.Облако](https://cloud.yandex.ru/), [Freenom](https://www.freenom.com), [Certbot](https://certbot.eff.org/), [pm2](https://pm2.keymetrics.io), [nginx](https://nginx.org)

