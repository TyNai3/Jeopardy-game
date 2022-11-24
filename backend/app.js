const express = require('express');

const cardsRouter = require('./routes/cardsRouter');

const serverConfig = require('./config/ServerConfig');
const AuthRouter = require('./routes/ayth');

const app = express();
const PORT = 3000;

serverConfig(app);
app.use('/cards', cardsRouter);

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
