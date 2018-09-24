module.exports = function (sequelize, DataTypes) {
  var Dino = sequelize.define("Dino", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    power: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
