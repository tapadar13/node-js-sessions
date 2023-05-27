const {
  getAllUsers,
  getUsersByUuid,
  searchUsersByQuery,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/search", searchUsersByQuery);
router.get("/:uuid", getUsersByUuid);

module.exports = router;
