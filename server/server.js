'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const movies = require('./movies.json');

const server = express();
server.use(logger('dev'));
server.use(express.static(path.join(__dirname, 'dist')));

server.get('/movies', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(movies);
});

server.get('/movies/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(movies.filter(movie => movie.id === req.params.id));
});

server.listen(3000, function () {
  console.log(`app listening on port ${3000}!`);
});

module.exports = server;