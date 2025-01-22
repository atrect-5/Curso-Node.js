
// Importamos el archivo donde guardamos nuestras peliculas generadas
const moviesMocks = require('../utils/mocks/moviesMocks')
const MovieSchema = require('../models/moviesModel')

class MoviesServices{

    // Metodo para obtener una lista de peliculas, ya sea completa o muchas filtradas
        /* Parameters: 
            -tags -> Etiquetas para filtrar peliculas
         */
        /* Response:  Los datos de todas las peliculas registradas o una lista vacia */
    async getMoviesService({tags}){
        const moviesList = await Promise.resolve(moviesMocks.movies)
        return moviesList || []
    }

    // Metodo para obtener una sola pelicula filtrada por id
        /* Parameters: 
            -movieId -> El id de una pelicula para buscar sus datos
         */
        /* Response:  Los datos de la pelicula encontrada o un objeto vacio */
    async getOneMovieService(movieId){
        const movie = await Promise.resolve(moviesMocks.movies[0])
        return movie || {}
    }

    // Se crea una nueva pelicula
        /* Parameters: 
            -
        */
       /* Response: Los datos de la pelicula creada*/
    async createMovieService(){
        const movie = await Promise.resolve(moviesMocks.movies[0])
        return movie
    }
    
    // Se actualiza una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para actualizar sus datos
         */
        /* Response:  Los datos de la pelicula actualizada */
    async updateMovieService(movieId){ 
        const updatedMovie = await Promise.resolve(moviesMocks.movies[0])
        return updatedMovie
    }
    
    // Se elimina una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para eliminarla de la base de datos
         */
        /* Response:  El id de la pelicula eliminada */
    async deleteMovieService(movieId){
        const deletedMovie = await Promise.resolve(moviesMocks.movies[0])
        return deletedMovie.id
    }

}


module.exports = MoviesServices