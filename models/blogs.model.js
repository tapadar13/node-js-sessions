const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  fullName: { type: String, maxLength: 25 },
  twitterHandle: { type: String },
  email: { type: String, requied: true, maxLength: 50 },
  image: { type: String },
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
