const {
  getCurrencyTitle,
  getCurrencies,
  getCurrenciesWithSymbol,
} = require("../controllers/currencies.controller");

const router = require("express").Router();

// router.get("/", getCurrencyTitle);
router.get("/", getCurrencies);
router.get("/:symbol", getCurrenciesWithSymbol);

module.exports = router;
