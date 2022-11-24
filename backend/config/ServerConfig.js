const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const getUser = require('../middlewares/getUser');

// конфигурации
const sessionConfig = require('./SessionConfig');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  optionsSuccessStatus: 200,
  credentials: true, // принимать куки от сторонних источников
};

const serverConfig = (app) => {
  app.use(session(sessionConfig));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions));
  app.use(getUser);
  app.use(cookieParser());

  // установка для работы сессий
};

module.exports = serverConfig;
