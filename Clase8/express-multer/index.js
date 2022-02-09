const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname)
    }
})

const fileMiddleware = multer({storage: storage})

app.post('/upload', fileMiddleware.single('image'), (req, res)=> {
    const file = req.file

    res.send(file)
})


app.use('/static', express.static('public'))

const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error en servidor ${error}`))