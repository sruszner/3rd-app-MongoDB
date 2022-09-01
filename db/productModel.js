
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const productSchema = new Schema ({
    product: {
        type: String, 
        required: true
    },
    stock: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('products', productSchema);
