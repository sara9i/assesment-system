"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attemptedQuestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  attemptedQuestions.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      assessmentId: {
        type: DataTypes.INTEGER,
        references: { model: "assessment", key: "id" },
      },
      questionId: {
        type: DataTypes.INTEGER,
        references: { model: "questions", key: "id" },
      },
      studentId: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "attemptedQuestions",
    }
  );
  return attemptedQuestions;
};
