"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require("mongoose");

// BlogCategory
const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

// BlogPost

const blogPostSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    blogCategoryId: {
      type: mongoose.Schema.ObjectId,
      ref: "BlogCategory",
      require: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "BlogPosts",
    timestamps: true,
  }
);

module.exports = {
  BlogCategory: mongoose.model("BlogCategory", blogCategorySchema),
  BlogPost: mongoose.model("BlogPost", blogPostSchema),
};
