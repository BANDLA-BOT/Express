"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var mongoose = require('mongoose');

var morgan = require('morgan');

var productsRoutes = require('./api/routes/products');

var orderRoutes = require('./api/routes/orders');

var bodyParser = require('body-parser'); //DB Connection


mongoose.connect('mongodb://localhost:27017/restAPI');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);
app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
