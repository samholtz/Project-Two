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
      defaultValue: 0
    },
    power: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  // Dino.associate = function (models) {
  //   Dino.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   })
  // }
  return Dino;
};
