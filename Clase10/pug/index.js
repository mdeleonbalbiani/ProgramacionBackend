const express = require('express')
const {Router} = express

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

//Rutas
app.get('/datos', (req, res)=>{
    res.render('nivel', req.query)
})

app.listen(8080)