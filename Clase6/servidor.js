const http = require('http')

const server = http.createServer( (request, response) => {
    let dateHour = new Date().getHours()
    if (dateHour >= 6 && dateHour <= 12) {
        response.end('Buenos dias!')
    } else {
        if (dateHour >= 13 && dateHour <= 19) {
            response.end('Buenas tardes!')
        } else{
            response.end('Buenas noches!')
        }
    }
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor Http escuchando en el puesto ${connectedServer.address().port} dando saludo dependiendo del horario`);
})