const _ = require("lodash");
const Path = require("path-parser").default;
const mongoose = require("mongoose");
const urlValidator = require("../middleware/urlValidator");
const { crawlUrl } = require("../services/crawler");

module.exports = (app) => {
  app.post("/api/preview", urlValidator, async (req, res) => {
    const url = req.body.previewUrl;

    try {
      const crawl = await crawlUrl(url);
      console.log(crawl);
      res.status(200).send(crawl);
    } catch (err) {
      res.status(400).send(err);
    }
    
    
    

  });
};
