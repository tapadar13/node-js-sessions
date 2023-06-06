const {
  createNewBlog,
  getAllBlogs,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);

module.exports = router;
