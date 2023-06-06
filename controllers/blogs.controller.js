const Blogs = require("../models/blogs.model");

const createNewBlog = async (req, res) => {
  console.log(req.body);
  const newBlogDoc = new Blogs(req.body);
  const result = await newBlogDoc.save();
  res.json(result);
};

module.exports = { createNewBlog };
