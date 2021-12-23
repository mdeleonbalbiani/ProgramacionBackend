//Callback

const operacion = (valor1, valor2, funcion) => funcion(valor1, valor2);

const sumar = (num1, num2) => console.log(num1 + num2);
const restar = (num1, num2) =>  console.log(num1 - num2);
const modulo = (num1, num2) =>  console.log(num1 * num2);
const division = (num1, num2) =>  console.log(num1 / num2);

operacion(1, 2, sumar)
operacion(1, 2, restar)
operacion(1, 2, modulo)
operacion(1, 2, division)