require("dotenv").config();
const currrencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const { verifyAuth } = require("./middlewares/verifyAuth");
const express = require("express");

const app = express();

const PORT = 8082;

app.use(verifyAuth);
app.use("/currencies", currrencyRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
