const db = require('mongoose');

const sch = new db.Schema({
	nombre: 'string',
	pass: 'string',
});

module.exports = db.model('Usuario', sch);