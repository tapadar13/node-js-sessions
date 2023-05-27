const { data } = require("../DB/users.json");

const getAllUsers = (req, res) => {
  res.json(data);
};

const getUsersByUuid = (req, res) => {
  const { uuid } = req.params;
  const result = data.find((item) => item.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const searchUsersByQuery = (req, res) => {
  const { gender, age } = req.query;
  if (!age && !gender) {
    return res.status(422).json({
      message: "Missing Search Parameters, search using age and/or gender",
    });
  }

  if (age) {
    if (!Number(age)) {
      return res
        .status(422)
        .json({ message: "Age parameter should be a number" });
    }

    if (age >= 100 || age < 0) {
      return res.status(422).json({
        message: "Age out of bounds. It should be a number between 0 and 100",
      });
    }
  }

  if (gender) {
    if (!["female", "male"].includes(gender)) {
      return res
        .status(422)
        .json({ message: "Gender to search can either be 'male' or 'female'" });
    }
  }

  if (gender && age) {
    const result = data.filter(
      (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
    );
    res.json(result);
  } else if (gender) {
    const result = data.filter((item) => item.gender === gender);
    res.json(result);
  } else if (age) {
    const result = data.filter((item) => Number(item.dob.age) >= Number(age));
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getAllUsers, getUsersByUuid, searchUsersByQuery };
