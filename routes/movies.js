
const express = require('express')

// Importamos la lista de los controladores que creamos
const { getMovies, getOneMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/moviesController')

function moviesAPI (app){    

    // Definiendo la ruta en la que trabajara el router
    const router = express.Router()
    app.use('/api/movies',router)

    // READ
    router.get('/', getMovies)
    router.get('/:movieId', getOneMovie)

    // CREATE
    router.post('/', createMovie)

    // UPDATE 
    router.put('/:movieId', updateMovie)

    // DELETE
    router.delete('/:movieId', deleteMovie)
}

module.exports = moviesAPI