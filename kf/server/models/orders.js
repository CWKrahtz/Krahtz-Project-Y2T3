const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    details: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("Order", OrderSchema)