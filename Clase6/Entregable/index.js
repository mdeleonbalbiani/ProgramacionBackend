const express = require('express');
const app = express();

const Contenedor =  require('./Contenedor')

const p = new Contenedor()

const PORT = 8080

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenidos al servidor Express del Desafio de la clase 6</h1>`)
  })

app.get('/productos',(req,res) => {
    res.json({
        productos:p.getAll()
    })
})
app.get('/productorandom',(req,res) => {
    res.json({
        productos:p.getRandom()
    })
})

const server =  app.listen( PORT, () =>{
    console.log(`Escuchando en puerto ${PORT}`)
})
server.on('error',(err) => console.log(err))