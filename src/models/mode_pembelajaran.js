'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mode_Pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mode_Pembelajaran.init({
    nama_mode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mode_Pembelajaran',
  });
  return Mode_Pembelajaran;
};