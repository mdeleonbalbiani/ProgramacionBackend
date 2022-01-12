function mostrarLetras(letras, i) {
    const cantLetras = letras.length
    let contador = 0
    const fin = () => console.log('Terminé');

    const letra = setInterval(mostrar, i, fin)

    function mostrar(termine) {
        if (contador == cantLetras) {
            clearInterval(letra); // paro el intervalo letra
            termine(); // ejecuto funcion flecha fin
        } else {
            console.log(`Mostrando letra número ${contador} - ${letras.charAt(contador)}`);
            contador++;
        }
    }

}


mostrarLetras("Hola!", 0)
mostrarLetras("HOLA!", 250)
mostrarLetras("hola!", 500)
