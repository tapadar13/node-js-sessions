const Blogs = require("../models/blogs.model");

const createNewBlog = async (req, res) => {
  console.log(req.body);
  const newBlogDoc = new Blogs(req.body);
  const result = await newBlogDoc.save();
  res.json(result);
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Could not fetch blogs from DB!", error });
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blogs.findOneAndDelete({ _id: id });
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't delete blog post. Please try again" });
  }
};

module.exports = { createNewBlog, getAllBlogs, deleteBlogWithId };
