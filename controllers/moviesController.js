

// Importamos la capa de servicios que creamos para el controlador
const MoviesServices = require('../services/moviesServices')

// Preparamos la clase de servicio que creamos para usarla en el controlador
const moviesServices = new MoviesServices()

// Funcion del controlador que usa el servicio para obtiener una lista de peliculas segun algunos parametros
const getMovies = async (req, res, next) => {
    try{
        // Etiquetas para filtrar peliculas (Datos en la query (url))
        const tags = req.query

        // Usamos el metodo de nuestra clase MoviesServices de nuestro servicio, Se le manda un objeto "{}" para filtrar peliculas
        const moviesList = await moviesServices.getMoviesService({tags})

        // Esto significa que hubo exito en la consulta y devolvemos en json la respuesta
        res.status(200).json({
            data:moviesList,
            message:'All moviies'
        })
    }catch(err){
        next(err)
    }
}

// Funcion del controlador que usa el servicio para obtiener los datos de una sola pelicula usando el id
const getOneMovie = async (req, res, next) => {
    // Obteniendo los parametros para bucar pelicula por id
    const {movieId} = req.params
    try{
        // Se llama al metodo del servicio para obtener una pelicula segun su id
        const movie = await moviesServices.getOneMovieService({movieId})

        // Esto significa que hubo exito en la consulta y devolvemos en json la respuesta
        res.status(200).json({
            data:movie,
            message:'Movie by id'
        })
    }catch(err){
        next(err)
    }
}

// Funcion del controlador que usa el servicio para crear una nueva pelicula
const createMovie = async (req, res, next) => {
    // Obtenemos los datos del body, que es donde mandaremos los datos de la pelicula que crearemos
    const {body:movie} = req
    try{
        // Mandamos llamar el metodo para crear una pelicula mandando como parametro los datos de la pelicula
        const createdMovie = await moviesServices.createMovieService({movie})

        // Esto significa que se creo exitosamente
        res.status(201).json({
            data:createdMovie, 
            message:'Movie created'
        })
    }catch(err){
        next(err)
    }
}

// Funcion del controlador que usa el servicio para actualizar los datos de una pelicula ya existente
const updateMovie = async (req, res, next) => {
    // Obteniendo los parametros para bucar pelicula por id
    const {movieId} = req.params
    // Obtenemos los datos del body, que es donde mandaremos los datos de la pelicula que actualizaremos
    const {body:movie} = req
    try{
        // Llamamos al metodo para actualizar una pelicula mandandole el id para encontrar la pelicula y los datos nuevos
        const updatedMovie = await moviesServices.updateMovieService({movieId, movie})

        // Esto significa que se actualizo exitosamente
        res.status(200).json({
            data:updatedMovie,
            message:'Movie updated'
        })
    }catch(err){
        next(err)
    }
}

// Funcion del controlador que usa el servicio para eliminar una pelicula de la base de datos segun su id
const deleteMovie = async (req, res, next) => {
    // Obteniendo los parametros para bucar pelicula por id
    const {movieId} = req.params
    try{
        // Utilizamos la funcion para eliminar una pelicula segun su id de nuestro servicio
        const deletedMovie = await moviesServices.deleteMovieService({movieId})

        // Esto significa que se elimino exitosamente
        res.status(200).json({
            data:deletedMovie, 
            message:'Movie deleted'
        })
    }catch(err){
        next(err)
    }
}

// Exportamos todos los controladores 
module.exports = {
    getMovies,
    getOneMovie,
    createMovie, 
    updateMovie,
    deleteMovie
}