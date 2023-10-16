"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch async-errors and send to errorHandler:
require("express-async-errors");

const User = require("../models/user");

// BlogCategory

module.exports.User = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).send({
      error: false,
      const: data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);

    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await User.findOne({ _id: req.params.userId }),
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
