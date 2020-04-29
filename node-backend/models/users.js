'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    userID: DataTypes.STRING,
    name: DataTypes.STRING,
    permission: DataTypes.INTEGER,
    api_token: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};