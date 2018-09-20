module.exports = function (sequelize, DataTypes) {
  var Dino = sequelize.define("dino", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    power: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  Dino.associate = function (models) {
    Dino.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Dino;
};
