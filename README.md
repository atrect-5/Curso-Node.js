# Curso de Node.js

En este repositorio esta la practica que hice para la clase de Node.js en Azul School

Esta practica utiliza Express.js para iniciar el servidor y MongoDB como motor de base de datos.
La base de datos de esta practica se encuentra en almacenamiento gratuito de Mongo Atlas

Se trata de una API que se usara para hacer un CRUD a una base de datos en la que se guardaran datos de peliculas. Los datos que se guardan de cada pelicula encuentran en el Schema en models/moviesModel.js


      
## Los endpoints disponibles de esta API son: 
- GET
    * /api/movies  
          -> Regresa una lista de todas las peliculasque tengan las 'tags' mandadas en el req.query (Para mas de un tag, se separan con '-' sin espacios) (Sin tags, regresa todas las peliculas) Ejemplo: `/api/movies?tags=Animated-Comedy`
    * /api/movies/:movieId  
          -> Regresa la informacion de una pelicula segun su Id (Se obtiene de req.params)
- CREATE
    * /api/movies
          -> Crea una nueva pelicula en la base de datos, obteniendo los datos de la pelicula del req.body y regresa la informacion de la pelicula creada
- PUT
    * /api/movies/:movieId
          -> Busca una pelicula segun el Id de req.params, actualiza la informacion de la pelicula con la obtenida de req.body y regresa los datos de la nueva pelicula guardada
- DELETE
    * /api/movies/:movieId
          -> Busca una pelicula segun el Id de req.params, elimina la pelicula de la base de datos y regresa el id de la pelicula que se elimino
  
## Las estructura de la peliculas es (Json):
```
{
    title : {
        type : String,
        required : true 
    },
    year : {
        type : Number,  
        required : true
    },
    cover : String,
    description : String,
    duration : String,
    contentRating : String,
    source : String,
    tags : [String]
    tiketPrice:Number,
    isOnCinemas:Boolean,
    schedules:[{
        time:Date
    }]
    createdAt : Date
    updatedAt : Date
}
```  
> 'createdAt' y 'updatedAt' Se asignan automaticamente, no es necesario mandar esos datos al crear o actualizar un registro
  
> La API responde con un objeto donde:
> { "data" : data, "message" : 'message'}
> 'data' son los datos retornados por la API indicados aqui arriba y 'message' es la accion que se realizo

> En caso de error, respondera con un objeto donde:
> { "error" : "error message" }
> 'error' es el mensaje de error
