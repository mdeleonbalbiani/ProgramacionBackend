class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        console.log(`El nombre completo del usuario es ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
        console.log(`${nombreMascota} ha sido agragado a las mascotas del usuario`);
    }

    countMascotas(){
        console.log(`El número de mascotas es: ${this.mascotas.length}`);
    }

    addBook(titulo, autor){
        const libro = {title: titulo, author: autor}
        this.libros = [...this.libros, libro]
        console.log(`El libro ${titulo} de ${autor} ha sido agregado a la lista del usuario`);
    }

    getBookNames(){
        const listaDeLibros = []
        this.libros.forEach(element => {
            listaDeLibros.push(element.title) 
        });
        console.log(`Los libros que ha leído el usuario son: \n ${listaDeLibros}`);
    }
}

const usuario = new Usuario("Martina", "De León");
usuario.getFullName();
usuario.addMascota("Zaira");
usuario.countMascotas();
usuario.addBook("El resplandor", "Stephen King");
usuario.getBookNames();