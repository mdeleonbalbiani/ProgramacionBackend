const express = require('express')
const { Router } = express

const app = express()
const personas = Router()
const mascotas = Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let listaMascotas = ["zaira", "uma", "wanda"]

//endpoints
mascotas.get('/', (req, res)=>{
    res.send(listaMascotas)
})
mascotas.post('', (req, res)=>{
    const name = req.body.name;
    listaMascotas.push(name)

    res.send(listaMascotas)
})

app.use('/personas', personas)
app.use('/mascotas', mascotas)

const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error en servidor ${error}`))