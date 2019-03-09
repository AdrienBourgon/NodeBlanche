import * as uuid from 'uuid/v4';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Example', [{
      id: uuid(),
      text: 'First example',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuid(),
      text: 'Second example',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Example', null, {});
  }
}