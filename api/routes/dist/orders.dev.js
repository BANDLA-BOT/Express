"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: "Orders fetched"
  });
});
router.post('/', function (req, res, next) {
  var order = {
    productId: req.body.productId,
    Quantity: req.body.Quantity
  };
  res.status(201).json({
    message: "Order created",
    order: order
  });
});
router.get('/:orderId', function (req, res, next) {
  var id = req.params.orderId;
  res.status(200).json({
    message: "Order ".concat(id, " fetched"),
    orderId: req.params.orderId
  });
});
router["delete"]('/:orderId', function (req, res, next) {
  res.status(200).json({
    message: "Order deleted",
    orderId: req.params.orderId
  });
});
module.exports = router;
//# sourceMappingURL=orders.dev.js.map
