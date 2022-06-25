const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db.js');

const Usuario = db.define('usuarios', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: 'yes',
		autoIncrement: 'yes',
	},
	nombre: {
		type: DataTypes.STRING
	},
	pass: {
		type: DataTypes.STRING,
	}
});

module.exports = Usuario;