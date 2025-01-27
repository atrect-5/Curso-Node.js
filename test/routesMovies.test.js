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
    describe('GET / Movies', ()=>{

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

        // En este caso testearemos que nos devuelva una sola pelicula segun el id
        it('Should respond with a one movie',(done)=>{
            request.get('/api/movies/6791aac69169f89ca238de19').expect(200).end((err, res)=>{
                assert.deepEqual(res.body,{
                    data:movies[0],
                    message:'Getting one movie by id'
                })
            })
            done()
        })

        
    })
    
    // Funcion que probara el metodo POST
    describe('POST / Movies', ()=>{
        
        it('Should respond with status 200',(done)=>{
            request.post('/api/movies').expect(201)
            done()
        })

        /*
        it('Should respond with the created movie',(done)=>{

            request.post('/api/movies')
            .set('Content-Type', 'application/json')
            .send(movies[0])
            .end((err, res)=>{
                assert.deepEqual(res.body,{
                    data:movies[0],
                    message:'Creating movie'
                })
            })
            done()
        })
        */
            
    
    })

    // Funcion que probara el metodo PUT
    describe('PUT / Movies', ()=>{
        
        it('Should respond with status 200',(done)=>{
            request.put('/api/movies/6791aac69169f89ca238de19').expect(200)
            done()
        })

        it('Should respond with a one movie',(done)=>{
            request.put('/api/movies/6791aac69169f89ca238de19')
            .set('Content-Type', 'application/json')
            .send(movies[0])
            .end((err, res)=>{
                assert.deepEqual(res.body,{
                    data:movies[0],
                    message:'Updating movie'
                })
            })
            done()
        })
    
    })

    // Funcion que probara el metodo DELETE
    describe('DELETE / Movies', ()=>{
        
        it('Should respond with the id of the movie that was deleted',(done)=>{
            request.delete('/api/movies/6791aac69169f89ca238de19').expect(200).end((err, res)=>{
                assert.deepEqual(res.body,{
                    data:movies[0].id,
                    message:'Getting one movie by id'
                })
            })
            done()
        })
    
    })

})