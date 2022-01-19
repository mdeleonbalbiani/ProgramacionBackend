const fs = require('fs')
class Contenedor {
    constructor() {
      
    }
    
    getAll() {
        try {
            const data = fs.readFileSync('productos.txt', 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw new Error('No se pudo leer el archivo')
        }   
    }
   
    getRandom(){
        const data = this.getAll()
        return data[Math.floor(Math.random()*data.length)]
    }
}
module.exports = Contenedor