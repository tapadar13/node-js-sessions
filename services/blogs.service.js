const Blogs = require("../models/blogs.model");

const findAllBlogs = async (body) => {
  const allBlogs = await Blogs.find({});
  return allBlogs;
};

module.exports = { findAllBlogs };
