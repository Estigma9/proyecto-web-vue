const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes')
const bodyParser = require('body-parser');

//instancia de express en mi app
const app = express();


//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//primera ruta
app.get('/api', apiRoutes);

app.set('PORT', 3000);

app.listen(app.get('PORT'), ()=>{
    console.log('server up');
});


