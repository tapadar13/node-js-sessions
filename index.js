const express = require("express");
require("dotenv").config();

const app = express();

const PORT = 8082;

const currrencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");

app.use("/currencies", currrencyRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
