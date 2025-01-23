
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
        
        try{
            // Creamos la query con los tags que recibimos
            const query = tags && {tags: {$in:tags}}
    
            // Buscamos en la base de datos
            const moviesList = await Movie.find(query)
            console.log('All movies were get')
            // Retornamos los datos encontrados
            return moviesList || []
        }catch(err){
            console.log(err)
        }

    }

    // Metodo para obtener una sola pelicula filtrada por id
        /* Parameters: 
            -movieId -> El id de una pelicula para buscar sus datos
         */
        /* Response:  Los datos de la pelicula encontrada o un objeto vacio */
    async getOneMovieService(movieId){
        try{
            const movie = await Movie.findById(movieId)
            console.log('One movie was got')
            return movie || {messege:'Movie not found'}
        }catch(err){
            console.log(err)
            return {messege:'Movie not found'}
        }
    }

    // Se crea una nueva pelicula
        /* Parameters: 
            -movie -> Objeto que contiene los datos de la pelicula que se creara
        */
       /* Response: Los datos de la pelicula creada*/
    async createMovieService(movie){
        try{
            const createdMovie = await Movie.create(movie)
            console.log('A movie has been created')
            return createdMovie
        }catch(err){
            console.log(err)
            return {messege:'An error occurred while creating the movie'}
        }
    }
    
    // Se actualiza una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para actualizar sus datos
            -movie -> Datos de la pelicula que seran actualizados
         */
        /* Response:  Los datos de la pelicula actualizada */
    async updateMovieService(movieId, movie){ 
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, { new:true })
            console.log('A movie has been updated')
            return updatedMovie || {messege:'Movie not found'}
        }catch(err){
            console.log(err)
            return {messege:'Movie not found'}
        }
    }
    
    // Se elimina una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para eliminarla de la base de datos
         */
        /* Response:  El id de la pelicula eliminada */
    async deleteMovieService(movieId){
        try{
            const deletedMovie = await Movie.findByIdAndDelete(movieId)
            console.log('A movie has been deleted')
            return deletedMovie.id
        }catch(err){
            console.log(err)
            return 'Movie not found'
        }
    }

}


module.exports = MoviesServices