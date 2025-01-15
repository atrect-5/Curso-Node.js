
// Estructura para levantar el servidor
const express = require('express')
const app = express()
// Aqui obtenemos los datos de '.env' (variables de entorno)
const dotenv = require('dotenv').config()
// Obtenemos el valor de la variable de entorno 'PORT'
const port = process.env.PORT 

// Importamos la funcion que creamos para ver las peliculas guardadas
const moviesAPI = require('./routes/movies')

/******** CONEXION A LA BASE DE DATOS **********/
// Obtenemos la url de nuestra base de datos 
const DBURL = process.env.DBURL

// Libreria que se encargara de la conexion a la base de datos 
const mongoose = require('mongoose')

// Conectando a la base de datos
mongoose.connect(DBURL);

// Prueba de agregar un dato a la base de datos
const collectionName = 'Cats' 
const Cat = mongoose.model(collectionName, { name: String });

const kitty = new Cat({ name: 'candy' });
kitty.save().then(() => console.log('Successfully saved'));



// Rutas de la api
app.get('/', (req, res) => res.send('Welcome to the app c:'))
moviesAPI(app)


app.listen(port, () => 
    {console.log(`Listening on port ${port}!
    http://localhost:${port}`)}
)