"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

// Call Controllers:
const { User}  = require("../controllers/user");


// login  ------------------------------------------
router.post("/login", User.login);
// router.all("/logout", User.logout);

router.route("/")
    .get(User.list)
    .post(User.create);

router.route("/:userId")
    .get(User.read)
    .put(User.update)
    .delete(User.delete);

module.exports = router
