const express = require('express')
const { Router } = express

const app = express()
const personas = Router()
const mascotas = Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let listaMascotas = ["zaira", "uma", "wanda"]
let listaPersonas = ["Martina"]

function middlewarePrefix(req, res, next){
    const name = req.body.name
    req.body.name = `Mi mascota ${name}`

    next()
}

//endpoints
mascotas.get('/', (req, res)=>{
    res.send(listaMascotas)
})
mascotas.post('', middlewarePrefix, (req, res)=>{
    const name = req.body.name;
    listaMascotas.push(name)

    res.send(listaMascotas)
})

personas.get('/', (req, res)=>{
    res.send(listaPersonas)
})
personas.post('', (req, res)=>{
    const name = req.body.name;
    listaPersonas.push(name)

    res.send(listaPersonas)
})

app.use('/personas', personas)
app.use('/mascotas', mascotas)
app.use('/static', express.static('public'))

const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error en servidor ${error}`))