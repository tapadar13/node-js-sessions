const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogsWithId,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogsWithId);

module.exports = router;
