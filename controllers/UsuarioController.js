const Usuario = require('../models/Usuario.js');

const index = async (req, res) => {
	const u = await Usuario.findAll();
	res.json(u);
}

const create = async (req, res) => {

	try {
		await Usuario.create({
			nombre: req.body.nombre,
			pass: req.body.pass,
		});

		res.send('Usuario creado correctamente');
	} catch(e) {
		res.send('Error ' + e);
	}
}

const update = async (req, res) => {
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
}

const destroy = async (req, res) => {
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
}

module.exports = {
	index: index,
	create: create,
	update: update,
	destroy: destroy,
}