const express = require("express");
const {
  getCurrencyTitle,
  getCurrencies,
  getCurrenciesWithSymbol,
} = require("./controllers/currencies.controller");
const {
  getAllUsers,
  getUsersByUuid,
  searchUsersByQuery,
} = require("./controllers/users.controllers");

const app = express();

const PORT = 8082;

app.get("/", getCurrencyTitle);
app.get("/currencies", getCurrencies);
app.get("/currencies/:symbol", getCurrenciesWithSymbol);

app.get("/users", getAllUsers);
app.get("/users/search", searchUsersByQuery);
app.get("/users/:uuid", getUsersByUuid);

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
