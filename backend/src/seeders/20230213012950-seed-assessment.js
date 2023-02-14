"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "assessments",
      [
        {
          id: 1,
          title: "Test Assessment",
          description: "testing assessment",
          isActive: true,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          id: 2,
          title: "Test Assessment 2",
          description: "testing assessment 2",
          isActive: true,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("assessments", null, {});
  },
};
