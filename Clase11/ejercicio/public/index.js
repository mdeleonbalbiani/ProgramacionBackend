/* const socket = io()

socket.on('mi mensaje', data => {
    alert(data)
})


const input = document.querySelector('input')
input.addEventListener('input', () => {
    socket.emit('mensajeCliente', input.value)
})

socket.on('mensajeServidor', data => {
    document.querySelector('p').innerHTML = data
}) */


//ej 3
const socket = io.connect();

const input = document.querySelector('input')
document.querySelector('button').addEventListener('click', () => {
    socket.emit('mensaje', input.value);
})

socket.on('mensajes', msjs => {
    const mensajesHTML = msjs
        .map(msj => `SocketId: ${msj.socketid} -> Mensaje: ${msj.mensaje}`)
        .join('<br>')
    document.querySelector('p').innerHTML = mensajesHTML
});
