const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('usuarios', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;