
//  Creamos nuestra funcion 'middleware' para imprimir el error en consola
function logError(err, req, res, next){
    console.log(err)
    next(err)
}

// Creamos nuestra funcion para manejar errores en el CRUD
function handleError(err, req, res, next){
    res.json({error:err.message})
    res.status (err.status || 500)
    next(err)
}


// Exportamos los middleware
module.exports = {
    logError,
    handleError
}