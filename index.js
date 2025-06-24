// Estructura para levantar el servidor
const express = require('express')
const app = express()
// Aqui obtenemos los datos de '.env' (variables de entorno)
const dotenv = require('dotenv').config()
// Libreria que se encargara de la conexion a la base de datos 
const mongoose = require('mongoose')
// Importamos nuestro middleware para el manejo de errores
const { logError, handleError } = require('./middlewares/errorMiddleware')
// Dependencia que nos permitira configurar nuestra API para poder acceder desde un agente externo a nuestro servidor
const cors = require('cors')
// Importamos los archivos y dependencias para mostrar la documentacion de la API con swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json')

// Importamos la funcion que creamos para ver las peliculas guardadas
const moviesAPI = require('./routes/movies')

// Archivo de configuracion del cors para permitir el acceso a solo determinados servidores
const corsConfig = {origin:['https://gentle-sea-67216-22c20027ecbb.herokuapp.com/', 'http://localhost:3001', 'http://localhost:3000', 'https://atrect-5.github.io/Curso-de-React/']}

// Configuramos el cors de la app 
app.use(cors(corsConfig))
// app.use(cors(corsConfig))  // Asi seria para permitir el acceso a determinados servidores

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
// Documentación Swagger en la ruta /docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get('/', (req, res) =>
  res.send(`
    <h1>Welcome to the app c:</h1>
    <p>Visita la <a href="/docs" style="font-weight:bold; color:#1976d2;">documentación de la API (Swagger)</a></p>
  `)
)
moviesAPI(app)

// Usamos nuestro middleware despues de nuestras rutas
app.use(logError)
app.use(handleError)


// Obtenemos el valor de la variable de entorno 'PORT'
const port = process.env.PORT 

app.listen(port, () => 
    {console.log(`Listening on port ${port}!
    http://localhost:${port}`)}
)