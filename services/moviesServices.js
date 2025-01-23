
// Importamos el archivo donde guardamos nuestras peliculas generadas
const moviesMocks = require('../utils/mocks/moviesMocks')
const Movie = require('../models/moviesModel')

class MoviesServices{

    // Metodo para obtener una lista de peliculas, ya sea completa o muchas filtradas
        /* Parameters: 
            -tags -> Etiquetas para filtrar peliculas
         */
        /* Response:  Los datos de todas las peliculas registradas o una lista vacia */
    async getMoviesService(tags){
        // Creamos la query con los tags que recibimos
        const query = tags && {tags: {$in:tags.split("-")}}

        // Buscamos en la base de datos
        const moviesList = await Movie.find(query)
        if (tags)
            {console.log('Getting all movies with tags:',tags.split("-"))}
        else
            {console.log(`Getting all movies`)}
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
        if (movie){
            console.log('One movie was got')
            return movie
        } 
        throw new Error('Movie not found')        
    }

    // Se crea una nueva pelicula
        /* Parameters: 
            -movie -> Objeto que contiene los datos de la pelicula que se creara
        */
       /* Response: Los datos de la pelicula creada*/
    async createMovieService(movie){
        const createdMovie = await Movie.create(movie)
        if (createdMovie){
            console.log('A movie has been created')
            return createdMovie
        } 
        throw new Error('Movie was not created')
    }
    
    // Se actualiza una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para actualizar sus datos
            -movie -> Datos de la pelicula que seran actualizados
         */
        /* Response:  Los datos de la pelicula actualizada */
    async updateMovieService(movieId, movie){ 
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, { new:true })
        if (updatedMovie){
            console.log('A movie has been updated')
            return updatedMovie
        }
        throw new Error('Movie not found') 
    }
    
    // Se elimina una pelicula
        /* Parameters: 
            -movieId -> El id de una pelicula para eliminarla de la base de datos
         */
        /* Response:  El id de la pelicula eliminada */
    async deleteMovieService(movieId){
        const deletedMovie = await Movie.findByIdAndDelete(movieId)
        if (deletedMovie){
            console.log('A movie has been deleted')
            return deletedMovie.id
        }
        throw new Error('Movie not found') 
    }

}


module.exports = MoviesServices