const sequelize = require('sequelize');

const db = new sequelize('elearning','root','Farah123!@#',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports= db;
