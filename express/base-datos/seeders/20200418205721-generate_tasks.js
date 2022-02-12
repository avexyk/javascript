'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tasks', [
        {id:1, description: 'Elemento 1',createdAt: new Date(), updatedAt: new Date()},
        {id:2, description: 'Elemento 2',createdAt: new Date(), updatedAt: new Date()},
        {id:3, description: 'Elemento 3',createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tasks', null, {});
  }
};
