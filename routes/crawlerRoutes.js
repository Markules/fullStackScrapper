const _ = require("lodash");
const Path = require("path-parser").default;
const mongoose = require("mongoose");
const urlValidator = require("../middleware/urlValidator");

module.exports = (app) => {
  app.post("/api/preview", urlValidator, async (req, res) => {
    console.log('request', req.body.previewUrl);
  });
};
