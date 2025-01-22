
// Importamos mongooes que nos ayudara a hacer el modelo 
const { Schema, model } = require('mongoose')

// Creamos el esquema de las peliculas
const moviesSchema = new Schema({
    title:{
        type:String,
        required:true   // Se marca como requerido
    },
    year:{
        type:Date,      // default:Date.now Para marcar fecha actual en caso de que no se proporcione
        required:true
    },
    cover:{
        type:String,
        default:'http://dummyimage.com/155x176.png/cc0000/ffffff'
    },
    description:String,
    duration:String,
    contentRating:String,
    source:String,
    tags:[String]
},{
    timestamps:true,     // Marcas de tiempo que se utilizan para registrar la fecha y la hora exacta de un evento.
    versionKey:false    // Es una cadena que representa la ruta que se utilizará para el control de versiones
}) 

module.exports = model( 'MovieSchema', moviesSchema )