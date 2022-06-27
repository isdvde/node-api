var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');

router.get('/', UsuarioController.index);
router.post('/create', UsuarioController.create);
router.put('/update/:id', UsuarioController.update);
router.delete('/delete/:id', UsuarioController.destroy);

module.exports = router;
