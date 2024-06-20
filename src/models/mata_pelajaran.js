'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mata_Pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mata_Pelajaran.init({
    nama_pelajaran: DataTypes.STRING,
    thumbnail_pelajaran: DataTypes.STRING,
    id_mpk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mata_Pelajaran',
  });
  return Mata_Pelajaran;
};