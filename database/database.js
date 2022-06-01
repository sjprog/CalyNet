const Sequelize = require("sequelize");

const connection = new Sequelize('CalyNet','root','Si96513782', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;