
const express = require('express')

/** Lo quitamos, ya que ahora se convirtio en un servicio "MoviesService" **/
// importamos el archivo don de guardamos nuestras peliculas generadas
/*const moviesMocks = require('../utils/mocks/moviesMocks')*/
/** Lo quitamos porque ahora se utiliza el servicio en el controlador **/
// Importamos la capa de servicios que creamos para el controlador
/*const MoviesServices = require('../services/moviesServices')*/

// Importamos la lista de los controladores que creamos
const { getMovies, getOneMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviesController')

function moviesAPI (app){
    
    /** Ahora se instancia en el controlador **/
    // Preparamos la clase de servicio que creamos para usarla en el controlador
    /*const moviesServices = new MoviesServices()*/

    // Definiendo la ruta en la que trabajara el router
    const router = express.Router()
    app.use('/api/movies',router)


    // READ
    router.get('/', getMovies)

    // READ one movie
    router.get('/:movieId', getOneMovie)


    // CREATE
    router.post('/', createMovie)


    // UPDATE 
    router.put('/:movieId', updateMovie)


    // DELETE
    router.delete('/:movieId', deleteMovie)


}

module.exports = moviesAPI