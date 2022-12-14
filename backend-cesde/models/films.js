module.exports = (sequelize, type)=>{
    return sequelize.define('film', {
        //Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: type.TEXT,
            allowNull: false,
        },
        description: {
            type: type.TEXT,
            allowNull: false,
        },
        score: {
            type: type.TEXT,
            allowNull: false,
        },
        director: {
            type: type.TEXT,
            allowNull: false,
        },
    },
    {
         timestamps: false,
    }
    
    );
};





