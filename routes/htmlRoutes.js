var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Route to the store page
  app.get("/store", function (req, res) {
    db.Item.findAll({})
      .then(function (item_result) {
        db.User.findOne({ where: { id: 4 } })
          .then(function (user_result) {
            return res.render("store", { items: item_result, user: user_result });
          });
      });
  });



  // race route loads race.html
  app.get("/race", function (req, res) {
    res.render("race");
  });

  // petting zoo route loads pettingzoo.html
  app.get("/pettingzoo", function (req, res) {
    res.render("pettingzoo");
  });

  // trophy case route loads trophycase.html
  app.get("/trophycase", function (req, res) {
    res.render("trophycase");
  });

  //battle route leads to battle.html
  app.get("/battle", function (req, res) {
    res.render("battle");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
