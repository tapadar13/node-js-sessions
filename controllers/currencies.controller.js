const { data } = require("../DB/response.json");
const getCurrencyTitle = (req, res) => {
  console.log("Current route: /");
  res.send("<h1>Currency Database</h1>");
  res.end();
};

const getCurrencies = (req, res) => {
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
