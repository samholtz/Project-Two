var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    // db.Dino.findAll({ where: { UserId: 4 }, include: [db.User] }).then(function (result) {
    //   return res.render("index", { result: result });
    //   //res.json(result);
    // });
    db.User.findOne({ where: { id: 4 }, include: [db.Dino] }).then(function (user_result) {
      return res.render("index", { user: user_result });
    });

  });

  // Route to the store page
  app.get("/store", function (req, res) {
    db.Item.findAll({}).then(function (item_result) {
      db.User.findOne({ where: { id: 4 }, include: [db.Dino] }).then(function (user_result) {
        return res.render("store", { items: item_result, user: user_result });
      });
    });
  });

  // race route loads race.html
  app.get("/race", function (req, res) {
    db.Item.findAll({}).then(function (item_result) {
      db.User.findOne({ where: { id: 4 } }).then(function (user_result) {
        return res.render("race", { items: item_result, user: user_result });
      });
    });
  });

  // petting zoo route loads pettingzoo.html
  app.get("/pettingzoo", function (req, res) {
    db.Item.findAll({}).then(function (item_result) {
      db.User.findOne({ where: { id: 4 } }).then(function (user_result) {
        return res.render("pettingzoo", {
          items: item_result,
          user: user_result
        });
      });
    });
  });

  // trophy case route loads trophycase.html
  app.get("/trophycase", function (req, res) {
    db.Item.findAll({}).then(function (item_result) {
      db.User.findOne({ where: { id: 4 } }).then(function (user_result) {
        return res.render("trophycase", {
          items: item_result,
          user: user_result
        });
      });
    });
  });

  //battle route leads to battle.html
  app.get("/battle", function (req, res) {
    db.Item.findAll({}).then(function (item_result) {
      db.User.findOne({ where: { id: 4 } }).then(function (user_result) {
        return res.render("battle", { items: item_result, user: user_result });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
