const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    variations: {
        color1: {
            type: Number,
            required: true
        },
        color2: {
            type: Number,
            required: true
        },
        color3: {
            type: Number,
            required: true
        },
    }
})

module.exports = mongoose.model("Product", ProductSchema)