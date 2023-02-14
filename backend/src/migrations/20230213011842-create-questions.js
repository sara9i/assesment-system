"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("questions", {
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
      sectionId: {
        type: Sequelize.INTEGER,
        references: { model: "sections", key: "id" },
      },
      sectionId: {
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
    await queryInterface.dropTable("questions");
  },
};
