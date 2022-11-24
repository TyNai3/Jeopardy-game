const express = require('express');

const serverConfig = require('./config/ServerConfig');
const AuthRouter = require('./routes/ayth');

const app = express();
const PORT = 3000;

serverConfig(app);

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
