const express = require("express")

const app = express();

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

function getRandomElem(arr) {
    return arr[ Math.floor(arr.length * Math.random()) ]
}

function generarCombinacion(){
    return {
        nombre: getRandomElem(nombres),
        apellido: getRandomElem(apellidos),
        color: getRandomElem(colores)
    }
}

function generarData(cantidad){
    const personas = []
    for (let i = 0; i < cantidad; i++) {
        personas.push(generarCombinacion())
    }
    return personas;
}

app.get('/test', (req, res) => {
    const data = generarData(10)
    res.send(data)
})

app.listen(8080)