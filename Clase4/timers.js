/* const delay = ret => { for(let i=0; i<ret*3e6; i++); }

function hacertarea(num) {
    console.log('haciendo tarea ' + num);
    delay(100)
}

console.log('inicio de tareas');
hacertarea(1)
hacertarea(2)
hacertarea(3)
hacertarea(4)
console.log('fin de tareas');
console.log('otras tareas'); */

function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num);
    setTimeout(cb,100);
}

console.log('inicio de tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas');
            })
        })
    })
})

console.log('otras tareas');