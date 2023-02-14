"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  answers.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.STRING },
      assessmentId: {
        type: DataTypes.INTEGER,
        references: { model: "assessment", key: "id" },
      },
      questionId: {
        type: DataTypes.INTEGER,
        references: { model: "questions", key: "id" },
      },
      isCorrect: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "answers",
    }
  );
  return answers;
};
