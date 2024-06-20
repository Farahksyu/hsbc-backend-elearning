'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mode_Pembelajaran_Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mode_Pembelajaran_Kelas.init({
    id_mode: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mode_Pembelajaran_Kelas',
  });
  return Mode_Pembelajaran_Kelas;
};