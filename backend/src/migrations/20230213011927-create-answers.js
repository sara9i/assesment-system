"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      assessmentId: {
        type: Sequelize.INTEGER,
        references: { model: "assessments", key: "id" },
      },
      assessmentId: {
        type: Sequelize.INTEGER,
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: { model: "questions", key: "id" },
      },
      questionId: {
        type: Sequelize.INTEGER,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("answers");
  },
};
