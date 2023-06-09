const Blogs = require("../models/blogs.model");

const createBlogDocument = async (body) => {
  const newBlogDoc = new Blogs(body);
  const result = await newBlogDoc.save();
  return result;
};

const findAllBlogs = async (body) => {
  const allBlogs = await Blogs.find({});
  return result;
};

module.exports = { findAllBlogs, createBlogDocument };
