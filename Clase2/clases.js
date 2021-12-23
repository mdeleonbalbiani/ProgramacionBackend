class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
 
    static saludoCorto = 'Hola'
 
    saludoCompleto() {
        console.log(`Hola, soy ${this.nombre}`)
    }
 
    saludoEstatico() {
        console.log(Persona.saludoCorto)
    }
}

const eduardo = new Persona ("Eduardo", 21)

eduardo.saludoCompleto()