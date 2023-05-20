const express = require("express");
const {
  getCurrencyTitle,
  getCurrencies,
  getCurrenciesWithSymbol,
} = require("./controllers/currencies.controller");

const app = express();

const PORT = 8082;

app.get("/", getCurrencyTitle);
app.get("/currencies", getCurrencies);
app.get("/currencies/:symbol", getCurrenciesWithSymbol);

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
