const ejecutar = unaFuncion => unaFuncion()
const saludar = () => console.log('Hola!');
ejecutar(saludar)


//Otra forma, declaracion al momento
const ejecutar2 = unaFuncion => unaFuncion()
ejecutar2(() => console.log('Hola'))

//
const ejecutar3 = (unaFuncion, params) => unaFuncion(params)
const saludar1 = nombre => console.log(`Hola ${nombre}`); 
ejecutar3(saludar1, 'a todos!')