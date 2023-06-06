const Blogs = require("../models/blogs.model");

const createNewBlog = (req, res) => {
  const newBlogDoc = new Blogs({ title: "First Blog" });
  console.log(newBlogDoc);
  res.sendStatus(200);
};

module.exports = { createNewBlog };
