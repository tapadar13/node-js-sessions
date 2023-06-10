const Blogs = require("../models/blogs.model");

class BlogService {
  saveDocument = async (doc) => {
    const result = await doc.save();
    return result;
  };

  createBlogDocument = async (body) => {
    const newDoc = new Blogs(body);
    const savedDoc = await this.saveDocument(newDoc);
    return savedDoc;
  };

  findAllBlogs = async (body) => {
    const allBlogs = await Blogs.find({});
    return result;
  };

  deleteBlogDocument = async (documentId) => {
    const deletedDoc = await Blogs.findOneAndDelete(documentId);
    return deletedDoc;
  };

  updateBlogDocument = async (id, updateObject) => {
    const filter = { _id: id };
    const updatedDoc = await Blogs.findOneAndUpdate(filter, updateObject, {
      new: true,
    });
    return updatedDoc;
  };

  findBlogByTitleOrAuthor = async ({ title, author }) => {
    const matchingBlogs = await Blogs.find({
      $or: [
        { title: { $regex: new RegExp(title), $options: "gi" } },
        { author: { $elemMatch: { email: author } } },
      ],
    });
    return matchingBlogs;
  };
}

module.exports = BlogService;
