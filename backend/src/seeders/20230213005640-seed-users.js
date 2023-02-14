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
      "users",
      [
        {
          id: 1,
          name: "Snoop",
          email: "snoop@gmail.com",
          password: "Testing1",
          roleId: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          id: 2,
          name: "Scooby",
          email: "scooby@gmail.com",
          password: "Testing1",
          roleId: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          id: 3,
          name: "Herbie",
          email: "herbie@gmail.com",
          password: "Testing1",
          roleId: 2,
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
    return queryInterface.bulkDelete("users", null, {});
  },
};
