function crearMultiplicador(num1){
    return function(num2){
        console.log(`El producto de ambos números es ${num1 * num2}`)
    }
}

crearMultiplicador(2)(3)

