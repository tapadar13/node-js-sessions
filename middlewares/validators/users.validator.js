const Joi = require("joi");

const schema = Joi.object()
  .keys({
    age: Joi.number().min(0).max(100),
    gender: Joi.string().valid("male", "female"),
  })
  .or("age", "gender");

// const getQueryErrors = (data) => {
//   const result = schema.validate(data);
//   return result.error;
// };

const validateSearchQuery = (req, res, next) => {
  const { age, gender } = req.query;
  const { error } = schema.validate({ age, gender });

  if (error) {
    return res.status(422).json({ error });
  }
  next();
};

module.exports = { validateSearchQuery };
