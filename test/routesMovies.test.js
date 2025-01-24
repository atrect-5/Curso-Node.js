// Aqui van las funciones que probaran las rutas de la aplicacion

const assert = require('assert')
// Libreria que nos permite sobreescribir dependencias en testing
const proxyquire = require('proxyquire')
// Nos traemos las funciones hechas para remplazar a los servicios
const { movies, ServicesMoviesMocks } = require('../utils/mocks/moviesMocks')
// Servidor dedicado al testing ue hicimos
const testServer = require('../utils/testServer')


// Aqui iran las funciones que probaran nuestras rutas
describe('Movies Routes', ()=>{

    // Declaramos la ruta del archivo donde esta la funcion que vamos a probar
    // Tambien indicamos el remplazo de los controladores por la funcion que hicimos en los Mocks (para probar unicamente las rutas)
    const route = proxyquire('../routes/movies.js',
        {'../controllers/moviesController.js':ServicesMoviesMocks}
    )

    // Levantamos el servidor y le indicamos la ruta en la que vamos a trabajar
    const request = testServer(route)

    // Funcion que probara el GET
    describe('GET /Movies', ()=>{

        // En este caso testearemos que el status sea 200 (que hubo exito)
        it('Should respond with status 200',(done)=>{
            request.get('/api/movies').expect(200)
            done()
        })

        // En este caso testearemos que nos devuelva una lista de todas las peliculas
        it('Should respond with a list of the movies',(done)=>{
            request.get('/api/movies').end((err, res)=>{
                assert.deepEqual(res.body,{
                    data:movies,
                    message:'Getting many movies'
                })
            })
            done()
        })

        // Aqui provaremos la respuesta de cuando se crea una nueva pelicula
        it('Should respond with status 200',(done)=>{
            request.post('/api/movies').expect(201)
            done()
        })

    })

})