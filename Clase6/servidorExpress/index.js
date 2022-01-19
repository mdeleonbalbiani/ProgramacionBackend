const express = require('express')
const app = express()
const port = 8080;

let visitas = 0;
let date = new Date();

app.get('/', (req, res) => {
  res.send(`<h1>Bienvenidos al servidor Express </h1>`)
})

app.get('/visitas', (req, res) => {
    res.send(`Número de visitas: ${visitas++}`)
})

app.get('/fyh', (req, res) => {
    
    res.send(`Hoy es: ${date.getDate()} / ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`)
})

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})
