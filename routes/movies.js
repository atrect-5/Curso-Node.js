
const express = require('express')
// importamos el archivo don de guardamos nuestras peliculas generadas
const moviesMocks = require('./utils/mocks/moviesMocks')


function moviesAPI (app){
    const router = express.Router()
    app.use('/api/movies',router)

    router.get('/', async (req, res, next) => {
        try{
            // Aqui va la consulta a la base de datos
            /*Como no hay aun una base de datos, se accedera a los datos que guardamos en moviesMocks*/
            const moviesList = await Promise.resolve(moviesMocks)

            // Esto significa que hubo exito en la consulta
            res.status(200).json({
                data:moviesList,
                message:'todas las peliculas'
            })
        }catch(err){
            next(err)
        }
    })
}

module.exports = moviesAPI