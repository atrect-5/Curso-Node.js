
// Importamos el archivo donde guardamos nuestras peliculas generadas
const moviesMocks = require('../utils/mocks/moviesMocks')
const Movie = require('../models/moviesModel')

class MoviesServices{

    // Metodo para obtener una lista de peliculas, ya sea completa o muchas filtradas
        /* Parameters: 
            -tags -> Etiquetas para filtrar peliculas
         */
        /* Response:  Los datos de todas las peliculas registradas o una lista vacia */
    async getMoviesService({tags}){
        
        // Creamos la query con los tags que recibimos
        const query = tags && {tags: {$in:tags}}

        // Buscamos en la base de datos
        const moviesList = await Movie.find(query)

        // Retornamos los datos encontrados
        return moviesList || []
    }

    // Metodo para obtener una sola pelicula filtrada por id
        /* Parameters: 
            -movieId -> El id de una pelicula para buscar sus datos
         */
        /* Response:  Los datos de la pelicula encontrada o un objeto vacio */
    async getOneMovieService(movieId){
        const movie = await Movie.findById(movieId)
        return movie || {}
    }

    // Se crea una nueva pelicula
        /* Parameters: 
            -movie -> Objeto que contiene los datos de la pelicula que se creara
        */
       /* Response: Los datos de la pelicula creada*/
    async createMovieService(movie){
        const createdMovie = await Movie.create(movie)
        return createdMovie
    }
    
    // Se actualiza una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para actualizar sus datos
            -movie -> Datos de la pelicula que seran actualizados
         */
        /* Response:  Los datos de la pelicula actualizada */
    async updateMovieService(movieId, movie){ 
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, { new:true })
        return updatedMovie
    }
    
    // Se elimina una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para eliminarla de la base de datos
         */
        /* Response:  El id de la pelicula eliminada */
    async deleteMovieService(movieId){
        const deletedMovie = await Movie.findByIdAndDelete(movieId)
        return deletedMovie.id
    }

}


module.exports = MoviesServices