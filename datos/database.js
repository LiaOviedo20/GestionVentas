// datos/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'eventos_db',
    'evento_user',
    '12345',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3307
    }
);

module.exports = sequelize;