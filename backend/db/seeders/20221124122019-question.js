'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        name: 'Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?', answer: 'красный',count:200, topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Как называется маленький пластмассовый кусочек на конце шнурка?', answer: 'аглет',count:400, topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Из чего сделан самый крепкий дом в “Трех поросятах”?', answer: 'кирпич',count:600, topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Как называется колокол часов Вестминстерского дворца в Лондоне?', answer: 'биг бен',count:800, topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какой вкус у Куантро?', answer: 'апельсин',count:1000, topic_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какое млекопитающее известно самым мощным укусом в мире?', answer: 'бегемот',count:200, topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какая птица ассоциируется у вас с миром?', answer: 'голубь',count:400, topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какая птица является единственной, которая может летать задом наперед?',count:600, answer: 'колибри', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какое популярное морское существо обладает способностью клонировать себя?',count:800, answer: 'медуза', topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какое самое быстрое сухопутное животное?', answer: 'гепард',count:1000, topic_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      
      {
        name: 'Какой национальный вид спорта Канады?', answer: 'лакрос', count:200, topic_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сколько минут длится матч по регби?', answer: 'восемьдесят', count:400,topic_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'В какой стране были проведены первые Олимпийские игры?', answer: 'греция',count:600, topic_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сколько игроков в бейсбольной команде?', answer: 'девять',count:800, topic_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Какая единственная страна принимала участие во всех чемпионатах мира по футболу?', answer: 'бразилия',count:1000, topic_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
