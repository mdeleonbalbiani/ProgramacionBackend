const mongoose = require('mongoose');
const ProductModel = require('./models/Producto.model')

const URL = 'mongodb://localhost:27017/ecommerce'

mongoose.connect(URL)
    .then(async () => {
        try {
           
        } catch (error) {
            console.error(`error al conectar bd ${error}`);
        } finally {
            mongoose.disconnect().catch((err) => {
                console.error(err);
            })
        }
    })
    .catch(err => {
        console.error(`error al conectar bd ${err}`);
    })