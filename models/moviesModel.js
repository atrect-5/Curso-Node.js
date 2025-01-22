
// Importamos mongooes que nos ayudara a hacer el modelo 
const { Schema, model } = require('mongoose')

// Creamos el esquema de las peliculas
const Movies = new Schema({
    title:{
        type:String,
        required:true   // Se marca como requerido
    },
    year:{
        type:Number,  
        required:true
    },
    cover:{
        type:String,
        default:'https://media.istockphoto.com/id/1415203156/es/vector/p%C3%A1gina-de-error-icono-vectorial-de-p%C3%A1gina-no-encontrada-en-el-dise%C3%B1o-de-estilo-de-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=nss_aWPtTb0hpc4oiGfFs_PGfihrNwVX06wxkWVkBfQ='
    },
    description:String,
    duration:String,
    contentRating:String,
    source:{
        type:String,
        default:'https://media.istockphoto.com/id/1415203156/es/vector/p%C3%A1gina-de-error-icono-vectorial-de-p%C3%A1gina-no-encontrada-en-el-dise%C3%B1o-de-estilo-de-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=nss_aWPtTb0hpc4oiGfFs_PGfihrNwVX06wxkWVkBfQ='
    },
    tags:[String]
},{
    timestamps:true,     // Marcas de tiempo que se utilizan para registrar la fecha y la hora exacta de un evento.
    versionKey:false    // Es una cadena que representa la ruta que se utilizará para el control de versiones
}) 

module.exports = model( 'MovieSchema', Movies )