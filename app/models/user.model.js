const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };