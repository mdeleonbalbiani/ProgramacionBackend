const express = require('express');
const fs = require('fs');

const app = express();

// defino el motor de plantilla

app.engine('cte', async (filePath, options, callback) =>{
    try{
        const content = await fs.readFile(filePath)
        const rendered = content.toString()
                                .replace('^^titulo$$', ''+ options.titulo +'')
                                .replace('^^mensaje$$', ''+ options.mensjase +'')
                                .replace('^^autor$$', ''+ options.autor +'')
                                .replace('^^version$$', ''+ options.version +'');
        return callback(null, rendered)
    }catch(err){
        return callback(new Error(err))
    }
})


app.set('views', './views'); 

// especifica el directorio de vistas
app.set('view engine', 'cte'); 

// registra el motor de plantillas
app.get('/cte1', (req, res) => {
   const datos = {
       titulo: 'cte1',
       mensjase: 'mensaje',
       autor: 'autor',
       version: 'v1' 
   }
   res.render('plantilla', datos)
});

//app.use(express.static('public'))
app.listen(8080)