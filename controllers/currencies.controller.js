const { data } = require("../DB/response.json");
const { verifyAuth } = require("../middlewares/verifyAuth");

const getCurrencyTitle = (req, res) => {
  if (!verifyAuth(req)) {
    return res.status(403).send({ message: "Unauthorized Request" });
  }
  res.send("<h1>Currency Database</h1>");
  res.end();
};

const getCurrencies = (req, res) => {
  if (!verifyAuth(req)) {
    return res.status(403).send({ message: "Unauthorized Request" });
  }

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
};

const getCurrenciesWithSymbol = (req, res) => {
  if (!verifyAuth(req)) {
    return res.status(403).send({ message: "Unauthorized Request" });
  }

  const { symbol } = req.params;
  const result = data.find(
    (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
  );
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).send("{message: “Invalid Symbol”}");
  }
};

module.exports = { getCurrencyTitle, getCurrencies, getCurrenciesWithSymbol };
