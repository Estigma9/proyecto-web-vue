module.exports = (sequelize, type)=>{
    return sequelize.define('cesdeuser', {
        //Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: type.TEXT,
            allowNull: false,
        },
        userlastname: {
            type: type.TEXT,
            allowNull: false,
        },
        email: {
            type: type.TEXT,
            allowNull: false,
        },
        password: {
            type: type.TEXT,
            allowNull: false,
        },
    },
    {
         timestamps: false,
    }
    
    );
};





