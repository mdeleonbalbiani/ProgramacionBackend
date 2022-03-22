const mongoose = require('mongoose');
const ProductModel = require('./models/Producto.model')

const URL = 'mongodb://localhost:27017/ecommerce'

mongoose.connect(URL)
    .then(async () => {
        try {
            console.log('base conectada');

            const prod1 = new ProductModel({
                name: 'laptop',
                description: 'rayzen',
                price: 1200
            });

            const prod2 = new ProductModel({
                name: 'teclado',
                description: 'wireless',
                price: 120
            });

            let doc = await prod2.save();
            console.log(doc);
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