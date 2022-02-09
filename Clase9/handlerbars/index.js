const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'index.hbs'
}))

app.set('views', './views')

app.get('/', (req, res) => {
    res.render('datos.hbs', {
        nombre: 'Martina'
    })
 });

//app.use(express.static('public'))

app.listen(8080)