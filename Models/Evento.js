const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Evento = sequelize.define('Evento', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING }, 
    fecha: { type: DataTypes.DATE },
    lugar: { type: DataTypes.STRING },
    capacidad: { type: DataTypes.INTEGER }
}, {
    tableName: 'eventos' 
});

module.exports = Evento;