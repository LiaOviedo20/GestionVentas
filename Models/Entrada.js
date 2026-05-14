const { DataTypes } = require('sequelize');
const sequelize = require('../datos/database');
const Evento = require('./Evento');

const Entrada = sequelize.define('Entrada', {
    usuario: { type: DataTypes.STRING, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false }
});

Entrada.belongsTo(Evento, { foreignKey: 'eventoId', onDelete: 'CASCADE' });
module.exports = Entrada;