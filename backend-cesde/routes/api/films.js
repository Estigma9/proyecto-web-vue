const router = require('express').Router();
const {Film} = require('../../models');
//const userController = require('../../controllers/UserController.js');
//const bcrypt = require('bcryptjs');


//api/film 
router.get('/', async(req, res)=>{
    const film = await Film.findAll();
    res.status(200).json(film);
});

//api/film/register
router.post('/register', async(req, res)=>{
    const film = await Film.create(req.body);
    res.status(200).json(film);
});


module.exports = router;