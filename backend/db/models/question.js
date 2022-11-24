'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Topic}) {
      Question.belongsTo(Topic, {foreignKey: 'topic_id'})
    }
  }
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    count: {
      type: DataTypes.INTEGER
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};