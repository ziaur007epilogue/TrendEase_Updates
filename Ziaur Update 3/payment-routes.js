const express = require("express");

const router = express.Router();

const payment= require("../../controllers/shop/payment-controller")

router.post("/payment", payment);

module.exports = router;