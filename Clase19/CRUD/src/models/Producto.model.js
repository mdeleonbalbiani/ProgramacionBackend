const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
})

const productModel = model('products', productSchema);

module.exports = productModel;