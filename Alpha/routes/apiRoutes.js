var db = require("../models");

module.exports = function (app) {
  // Get all store
  app.get("/api/store", function (req, res) {
    db.item.findAll({}).then(function (dbitems) {
      res.json(dbitems);
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
