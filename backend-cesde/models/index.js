const Sequelize = require('sequelize');
const UserModel = require('./users');


const sequelize = new Sequelize('railway', 'postgres', 'zvika6T18IirypeVmSda', {
    host: 'containers-us-west-159.railway.app',
    port: '5633',
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




