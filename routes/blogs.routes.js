const { createNewBlog } = require("../controllers/blogs.controller");

const router = require("express").Router();

router.get("/new", createNewBlog);

module.exports = router;
