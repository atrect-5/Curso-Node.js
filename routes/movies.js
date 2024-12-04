
const express = require('express')
// importamos el archivo don de guardamos nuestras peliculas generadas
const moviesMocks = require('./utils/mocks/moviesMocks')


function moviesAPI (app){

    // READ
    const router = express.Router()
    app.use('/api/movies',router)

    router.get('/', async (req, res, next) => {
        try{
            // Aqui va la consulta a la base de datos
            /*Como no hay aun una base de datos, se accedera a los datos que guardamos en moviesMocks*/
            const moviesList = await Promise.resolve(moviesMocks)

            // Esto significa que hubo exito en la consulta y devolvemos en json la respuesta
            res.status(200).json({
                data:moviesList,
                message:'todas las peliculas'
            })
        }catch(err){
            next(err)
        }
    })


    // CREATE
    router.post('/', async (req, res, next) => {

        try{
            const createdMovie = await Promise.resolve(moviesMocks.movies[0].id)
            
            // Esto significa que se creo exitosamente
            res.status(201).json({
                data:createdMovie, 
                message:'created movie'
            })
        }catch(err){
            next(err)
        }
    })


    // UPDATE 
    router.put('/:movieId', async (req, res, next) => {

        try{
            const updatedMovie = await Promise.resolve(moviesMocks.movies[0].id)
            
            // Esto significa que se actualizo exitosamente
            res.status(200).json({
                data:updatedMovie,
                message:'updated movie'
            })
        }catch(err){
            next(err)
        }
    })


    // DELETE
    router.delete('/:movieId', async (req, res, next) => {

        try{
            const deletedMovie = await Promise.resolve(moviesMocks.movies[0].id)
            
            // Esto significa que se elimino exitosamente
            res.status(200).json({
                data:deletedMovie, 
                message:'deleted movie'
            })
        }catch(err){
            next(err)
        }
    })


}

module.exports = moviesAPI