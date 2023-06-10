const BlogService = require("../services/blogs.services");
const BlogServiceInstance = new BlogService();

const createNewBlog = async (req, res) => {
  try {
    const body = req.body;
    const newBlog = await BlogServiceInstance.createBlogDocument(body);
    res.json(newBlog);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't create new blog post. Please try again",
      error,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.findAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(404).json({ message: "Could not fetch blogs from DB!", error });
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BlogServiceInstance.deleteBlogDocument(id);
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't delete blog post. Please try again.", error });
  }
};

const updateBlogsWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const result = await BlogServiceInstance.updateBlogDocument(id, update);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't update blog post. Pleasse try again.",
      error,
    });
  }
};

const searchBlogs = async (req, res) => {
  const { title, author } = req.params;
  try {
    const result = await BlogServiceInstance.findBlogByTitleOrAuthor({
      title,
      author,
    });
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch blog posts. Please try agin.", error });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogsWithId,
  searchBlogs,
};
