module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dinoCoins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Dino);
  };
  return Dino;
};
