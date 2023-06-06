const {
  getAllUsers,
  getUsersByUuid,
  searchUsersByQuery,
} = require("../controllers/users.controllers");
const {
  validateSearchQuery,
} = require("../middlewares/validators/users.validators");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/search", validateSearchQuery, searchUsersByQuery);
router.get("/:uuid", getUsersByUuid);

module.exports = router;
