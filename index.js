const express = require("express");
const { data } = require("./DB/response.json");

const app = express();

const PORT = 8082;

const serverInfo = {
  serverName: "Crio Server",
  version: "1.0.0",
  currentDate: new Date().toDateString(),
  currentTime: new Date().toTimeString(),
};

app.get("/", (req, res) => {
  console.log("Current route: /");
  res.send("<h1>Currency Database</h1>");
  res.end();
});

app.get("/currencies", (req, res) => {
  const { min_value } = req.query;
  const result = data.filter(
    (elem) => Number(elem.min_size) === Number(min_value)
  );
  if (result) {
    res.status(200).json(result);
    res.end();
  } else {
    res.status(200).json(data);
    res.end();
  }
});

app.get("/currencies/:symbol", (req, res) => {
  const { symbol } = req.params;
  const result = data.find(
    (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
  );
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).send("{message: “Invalid Symbol”}");
  }
});

app.listen(PORT, () => {
  console.log(`Server is now successfully running at PORT ${PORT}`);
});
