const Usuario = require('../models/Usuario.js');
const { check, validationResult } = require('express-validator');

module.exports = {
	validation: [
		check('nombre').not().isEmpty(),
		check('pass').not().isEmpty(),
	],
	
	index: async (req, res) => {
		const usuarios = await Usuario.find({});
		console.log(usuarios);
		res.render('usuario/index', { usuarios: usuarios, });
	},

	edit: async (req, res) => {
		const usuarios = await Usuario.find({});
		const usuario = await Usuario.findOne().where({ 
			"_id": req.params.id, 
		});
		res.render('usuario/index', {
			usuarios: usuarios,
			edit: true,
			nombre: usuario.nombre,
			pass: usuario.pass,
			id: usuario.id
		});
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
				"_id": req.params.id,
			},{
				nombre: req.body.nombre,
				pass: req.body.pass,
			});
			res.redirect('/usuario');

		} catch(e) {
			res.send('Error ' + e)
		}
	},

	destroy: async (req, res) => {
		try {
			await Usuario.deleteOne({ "_id": req.params.id });
			res.redirect('/usuario');
		} catch(e) {
			res.send('Error ' + e);
		}
	},
}
