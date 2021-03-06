'use strict'
const express = require ('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false})); //para "entender" los datos que llegan desde el formulario
app.use(express.json()); //para que entienda el formato de datos tipo json (de aplicaciones react, vue, angular.. en general SPA)

app.use(require('./routes/index.routes.js'));

app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
    console.log(`Server on port ${port} `);
});