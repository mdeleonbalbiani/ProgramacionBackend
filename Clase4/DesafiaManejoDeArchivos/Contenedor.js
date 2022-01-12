const fs = require('fs')
class Contenedor {
    constructor(producto) {
        this.producto = producto
    }
    save(producto) {
        producto.id =  Date.now()
        const data = this.getAll()
        data.push(producto)
        try {
            fs.writeFileSync('productos.txt', JSON.stringify(data,null,4))
            return producto.id
        } catch (error) {
            console.log(error);
        }
        
    }
    getById(id) {
        const data = this.getAll()
        return data.find(producto => producto.id === id) || null
    }
    getAll() {
        try {
            const data = fs.readFileSync('productos.txt', 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            console.log(error);
        }   
    }
    deleteById(id) {
        const data = this.getAll()
        const deleted = data.filter(producto => producto.id !== id)
        try{
            fs.writeFileSync('productos.txt', JSON.stringify(deleted,null,4))
        }catch(error){
            console.log(error);
        }
    }
    deleteAll(){
        const data = []
        try{
        fs.writeFileSync('productos.txt', JSON.stringify(data,null,4))    
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = Contenedor