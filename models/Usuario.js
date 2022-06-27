const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db.js');

module.exports = db.define('usuarios', {
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