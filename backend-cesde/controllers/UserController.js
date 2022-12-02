const {user} = require('../models');
const bcrypt = require('bcryptjs');

exports.login = async(req, res, next) =>{
    try {
        const user = await models.User.findOne({where: {email:req.body.email}});

        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body, user.password);

            if (passwordIsValid) {


                
            } else {
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                });     
            }
        }else{
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            });

        }



        
    } catch (error) {
        res.status(500).send({
            message: 'Error->'
        })
        next(error);        
    }
};






