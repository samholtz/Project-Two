module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dinoCoins: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Dino);
  };
  return User;
};
