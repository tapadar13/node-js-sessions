const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    image: {
      type: String,
      validate: (value) => {
        return validator.isURL(value, {
          require_host: true,
          require_protocol: true,
        });
      },
    },
  },
  { _id: false }
);

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
