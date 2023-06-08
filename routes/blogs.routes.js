const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogsWithId,
  searchBlogs,
} = require("../controllers/blogs.controller");

const router = require("express").Router();

router.post("/new", createNewBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogsWithId);
router.get("/search", searchBlogs);

module.exports = router;
