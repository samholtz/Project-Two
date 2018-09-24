module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    statType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    statValue: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    cost: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return Item;
};
