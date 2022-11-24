const express = require('express');

const serverConfig = require('./config/ServerConfig');

const app = express();
const PORT = 3000;

serverConfig(app);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
