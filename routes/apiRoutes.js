var db = require("../models");

module.exports = function (app) {
  // Get all store
  console.log(db);

  app.get("/api/store", function (req, res) {
    db.Item.findAll({}).then(function (dbitems) {
      res.json(dbitems);
    });
  });

  app.get("/api/dinos", function (req, res) {
    db.Dino.findAll({ include: [db.User] }).then(function (dbitems) {
      res.json(dbitems);
    });
  });

  app.get("/api/users", function (req, res) {
    db.User.findAll({ include: [db.Dino] }).then(function (dbitems) {
      res.json(dbitems);
    });
  });

  app.put("/api/users", function (req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: 4
        }
      }).then(function (dbPost) {
        res.end();
      });
  });

  // Create a new Item
  // need to update this
  app.post("/api/Items", function (req, res) {
    db.Item.create(req.body).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  // Delete an Item by id
  // need to update this
  app.delete("/api/Items/:id", function (req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
      res.json(dbItem);
    });
  });
};
