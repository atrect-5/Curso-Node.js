
// Estructura para levantar el servidor
const express = require('express')
const app = express()
// Aqui obtenemos los datos de '.env' (variables de entorno)
const dotenv = require('dotenv').config()
// Obtenemos el valor de la variable de entorno 'PORT'
const port = process.env.PORT 

// Importamos la funcion que creamos para ver las peliculas guardadas
const moviesAPI = require('./routes/movies')


// Rutas de la api
app.get('/', (req, res) => res.send('Welcome to the app c:'))
moviesAPI(app)


app.listen(port, () => 
    {console.log(`Listening on port ${port}!
    http://localhost:${port}`)}
)