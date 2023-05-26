const express = require("express");

const {
  getAllUsers,
  getUsersByUuid,
  searchUsersByQuery,
} = require("./controllers/users.controllers");

const app = express();

const PORT = 8082;

const currrencyRoutes = require("./routes/currencies.routes");

app.use("/currencies", currrencyRoutes);

app.get("/users", getAllUsers);
app.get("/users/search", searchUsersByQuery);
app.get("/users/:uuid", getUsersByUuid);

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
