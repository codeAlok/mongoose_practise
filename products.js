// we keep Schema + models file seprate because , this could be diffrent for diffrent collections 

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        stock: Number,
        category: String
    }
);

module.exports = mongoose.model('products', productSchema);