require("dotenv").config();
const currrencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const blogRoutes = require("./routes/blogs.routes");
const { verifyAuth } = require("./middlewares/verifyAuth");
const express = require("express");
const mongoose = require("mongoose");
const DB_URI = "mongodb://127.0.0.1:27017";

const app = express();

const PORT = 8082;

app.use(express.json());
app.use(verifyAuth);
app.use("/currencies", currrencyRoutes);
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to DB at ", DB_URI);
    app.listen(PORT, () => {
      console.log(`Server is now successfully running at PORT ${PORT}`);
    });
  })
  .catch((e) => console.log("Failed to connect to DB", e));
