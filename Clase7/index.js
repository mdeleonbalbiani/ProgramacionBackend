const express = require("express");

const app = express();
const PORT = 8080
const fs = require("fs")

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error en servidor ${error}`))

const frase = "Hola Mundo Cómo Están"

app. get("/api/frase", (req,res) => {
    console.log("Request Recibido")
    res.send({frase:frase})
})
app. get("/api/letras/:num", (req,res) => {
    let character = req.params.num - 1
    console.log(frase.charAt(character))
    if(character >= frase.length || character<0){
        res.json({mssg:"El parámetro está fuera del rango"})
    }else if (isNaN(character)){
        res.json({mssg:"El parámetro no es un número"})
    }else{res.send(`<h1>${frase.charAt(character)}</h1>`)}
})
app.get("/api/palabras/:num", (req,res) => {
    let position = req.params.num - 1
    let words = frase.split(" ")
    if(position >= words.length || position<0){
        res.json({mssg:"El parámetro está fuera del rango"})
    }else if (isNaN(position)){
        res.json({mssg:"El parámetro no es un número"})
    }else{res.send(`<h1>${words[position]}</h1>`)}
})