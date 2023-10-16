"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- */
//SessionCookies

const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY || "secret_keys_for_cookies",
    //name: 'cookie' , // default: req.session
    maxAge: 1000 * 60 * 60 * 24, // {miliseconds}
  })
);
/* ------------------------------------------------------- */

app.use(express.json());

// Connect to MongoDB with Mongoose:
require("./src/dbConnection");

// HomePage:
app.all("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

// Routes:
app.use("/user", require("./src/routes/user"));
app.use("/blog", require("./src/routes/blog"));

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
