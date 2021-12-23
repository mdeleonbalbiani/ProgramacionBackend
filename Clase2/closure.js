function crearGritarNombre(nombre){
    const signosDeExplamacion = "!!!"
    return function(){
        console.log(`${nombre}${signosDeExplamacion}`);
    };
}

const hacerGrito = crearGritarNombre("Martina");

console.log(hacerGrito);
hacerGrito();