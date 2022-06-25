var express = require('express');
var router = express.Router();
const {index, create, update, destroy} = require('../controllers/UsuarioController.js');

router.get('/', index);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', destroy);

module.exports = router;
