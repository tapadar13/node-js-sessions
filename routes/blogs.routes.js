const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlogWithId);

module.exports = router;
