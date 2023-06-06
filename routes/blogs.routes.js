const { createNewBlog } = require("../controllers/blogs.controller");

const router = require("express").Router();

router.post("/new", createNewBlog);

module.exports = router;
