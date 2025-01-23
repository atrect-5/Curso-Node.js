
// Estructura para levantar el servidor
const express = require('express')
const app = express()
// Aqui obtenemos los datos de '.env' (variables de entorno)
const dotenv = require('dotenv').config()
// Obtenemos el valor de la variable de entorno 'PORT'
const port = process.env.PORT 
// Libreria que se encargara de la conexion a la base de datos 
const mongoose = require('mongoose')


// Importamos la funcion que creamos para ver las peliculas guardadas
const moviesAPI = require('./routes/movies')


// Utilizamos un middleware para "parsear" los datos de los objetos
app.use(express.json())
app.use(express.urlencoded({extended:false}))


/******** CONEXION A LA BASE DE DATOS **********/
// Obtenemos la url de nuestra base de datos 
const DBURL = process.env.DBURL
const COLLECTIONNAME = process.env.COLLECTIONNAME
const URLPARAMS = process.env.URLPARAMS

// Conectando a la base de datos
mongoose.connect(`${DBURL}${COLLECTIONNAME}${URLPARAMS}`)
    .then((res)=>{ console.log('Connection to DB successfully: '+res.connections[0].name) })
    .catch((err)=>{ console.error('DB connection error: ', err) })
    
// Rutas de la api
app.get('/', (req, res) => res.send('Welcome to the app c:'))
moviesAPI(app)


app.listen(port, () => 
    {console.log(`Listening on port ${port}!
    http://localhost:${port}`)}
)