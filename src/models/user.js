"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email field is required"],
      validate: [
        // (email) => {return email.include("@") && email.include(".");}, // Validation Check
        (email) => (email.includes("@") && email.includes(".")),
        "Email type is not correct",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password field is required"],
    },
    firstName: String,
    lastName: String,
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
