const express = require("express")
const { faker } = require('@faker-js/faker')

const app = express();

let id = 1;

function generarCombinacion(){
    return {
        id: id++,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.vehicle.color()
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