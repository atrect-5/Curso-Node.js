// Servidor unicamente dedicado al testing

const express = require("express")
// Libreria que nos permite levantar un servidor unicamente para testing
const supertest = require("supertest")


function testServer(route) {
    const app = express() 
    route(app)
    return supertest(app)
}

module.exports = testServer