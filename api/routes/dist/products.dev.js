"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var Product = require('../models/product'); // const product = require('../models/product');


router.get('/', function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Product.find());

        case 2:
          data = _context.sent;
          res.send(data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/', function (req, res, next) {
  var prod = {
    name: req.body.name,
    price: req.body.price
  };
  var product = new Product({
    // _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product.save().then(function (result) {
    console.log(result);
  })["catch"](function (err) {
    console.log(err);
  });
  res.status(200).json({
    message: "Handling POST requests to /products",
    Product: prod
  });
});
router.get('/:productId', function (req, res, next) {
  var id = Number(req.params.productId);
  product.findById(id);
});
router.patch('/:productId', function (req, res, next) {
  res.status(200).json({
    message: " Updated successfully"
  });
});
router["delete"]('/:_id', function _callee2(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.params);
          _context2.next = 3;
          return regeneratorRuntime.awrap(product.deleteOne(req.params));

        case 3:
          data = _context2.sent;
          console.log(data);
          res.end();

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;
//# sourceMappingURL=products.dev.js.map
