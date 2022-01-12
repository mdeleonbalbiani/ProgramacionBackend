function random(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}
function generarNumeros(){
    let o = {} //clave:valor -> clave-numero / valor-numero
    for (let i = 0; i < 100; i++){
        let n = random(1, 20)
        if(n in o)
            o[n]++;
        else
            o[n]=1;
    }
    return o;
}

console.log(generarNumeros());