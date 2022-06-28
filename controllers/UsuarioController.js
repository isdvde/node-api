const Usuario = require('../models/Usuario.js');
const { check, validationResult } = require('express-validator');

module.exports = {

	validation: [
		check('nombre').not().isEmpty(),
		check('pass').not().isEmpty(),
	],
	
	index: async (req, res) => {
		const u = await Usuario.findAll({
			order: [
				['id', 'asc'],
			],
			raw: true,
		});
		res.render('usuario/index', {usuarios: u});
	},

	store: async (req, res) => {
		try {
			if(validationResult(req).isEmpty()) {
				await Usuario.create({
					nombre: req.body.nombre,
					pass: req.body.pass,
				});
				
				res.redirect('/usuario');
			} else {
				res.redirect('/usuario');
			}

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

			res.redirect('/usuario');

		} catch(e) {
			res.send('Error ' + e);
		}
	},
}
