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
mascotas.post('', ()=>{})

app.use('/personas', personas)
app.use('/mascotas', mascotas)