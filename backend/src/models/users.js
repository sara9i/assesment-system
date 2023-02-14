"use strict";
const { Model } = require("sequelize");
const { hash } = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      email: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      roleId: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        references: { model: "roles", key: "id" },
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          console.log("Creating hash");
          const hashedPassword = await hash(user.password, 12);
          console.log("Created hash ", hashedPassword);
          user.password = hashedPassword;
        },
      },
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
