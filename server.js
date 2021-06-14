const express = require('express');
const helmet = require("helmet");

const { getMethod } = require('./middlewares/methods');

const app = express();
app.use(helmet());

app.get('/', getMethod, (req, res) => {
  res.json({ message: 'OK!' });
});

app.get('/users', (req, res) => {
  res.json({ message: 'users!' });
});

module.exports = app;
