const Sequelize = require('sequelize');
const UserModel = require('./users');


const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    port: '3306',
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log('Tablas sincronizadas');
    });

module.exports = {
    User
}




