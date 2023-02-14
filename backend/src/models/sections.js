"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sections.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      assessmentId: {
        type: DataTypes.INTEGER,
        references: { model: "assessment", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "sections",
    }
  );
  return sections;
};
