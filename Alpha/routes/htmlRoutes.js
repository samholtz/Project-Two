var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Route to the store page
  app.get("/store", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  // race route loads race.html
  app.get("/race", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  // petting zoo route loads pettingzoo.html
  app.get("/pettingzoo", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pettingzoo.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
