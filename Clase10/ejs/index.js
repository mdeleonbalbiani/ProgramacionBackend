const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

//Rutas
app.get('/datos', (req, res)=>{
    res.render('nivel', req.query)
})

app.listen(8080)