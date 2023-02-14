"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questions.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.STRING },
      assessmentId: {
        type: DataTypes.INTEGER,
        references: { model: "assessment", key: "id" },
      },
      sectionId: {
        type: DataTypes.INTEGER,
        references: { model: "sections", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "questions",
    }
  );
  return questions;
};
