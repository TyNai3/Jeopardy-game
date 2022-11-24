'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [
      { title: 'Рандомные вопросы', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Все о животных', createdAt: new Date(), updatedAt: new Date() },
      { title: 'Спортивные вопросы', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
