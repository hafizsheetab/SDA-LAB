const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    productId: {
        type: "String"
    },
    sellerId: {
        type: "String"
    },
    customerId: {
        type: "String"
    }
})

module.exports = Order = mongoose.model('order',OrderSchema)