"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attemptedQuestions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      studentId: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },
      studentId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("attemptedQuestions");
  },
};
