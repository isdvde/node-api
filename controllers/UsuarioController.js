const Usuario = require('../models/Usuario.js');
const { check, validationResult } = require('express-validator');

module.exports = {

	index: async (req, res) => {
		const u = await Usuario.findAll({
			order: [
				['id', 'asc'],
			],
			raw: true,
		});
		res.render('usuario/index', {usuarios: u});
	},

	create: async (req, res) => {
		try {
			await Usuario.create({
				nombre: req.body.nombre,
				pass: req.body.pass,
			});

			res.send('Usuario creado correctamente');

		} catch(e) {
			res.send('Error ' + e);
		}
	},

	update: async (req, res) => {
		try {
			await Usuario.update({
				nombre: req.body.nombre,
				pass: req.body.pass,
			},{
				where: {
					id: req.params.id
				}
			});

			res.send('Usuario actualizado correctamente');

		} catch(e) {
			res.send('Error ' + e)
		}
	},

	destroy: async (req, res) => {
		try {
			await Usuario.destroy({
				where: {
					id: req.params.id
				}
			});

			res.send('Usuario borrado correctamente');

		} catch(e) {
			res.send('Error ' + e);
		}
	},
}
