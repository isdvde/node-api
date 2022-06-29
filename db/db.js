const db = require('mongoose');

module.exports = db.connect("mongodb://127.0.0.1:27017/usuarios", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});