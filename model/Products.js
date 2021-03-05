const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Products = new Schema({
    product_id: {
        type: Number
    },
    product_name: {
        type: String
    },
    product_gtin: {
        type: String
    },
    product_price: {
        type: Number
    },
    product_sell_price: {
        type: Number
    },
    product_discount: {
        type: Number
    },
    product_flag: {
        type: Number
    },
    product_dynamic_link: {
        type: String
    },
    product_brand: {
        type: String
    },
    product_type: {
        type: String
    },
    product_colour: {
        type: String
    },
    product_tag: {
        type: String
    },
    product_images: {
        type: String
    },
    description: {
        type: String
    }
}, {
    collection: 'products'
})

module.exports = mongoose.model('Products', Products)