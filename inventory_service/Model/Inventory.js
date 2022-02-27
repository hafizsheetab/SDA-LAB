const mongoose = require('mongoose')

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = Inventory = mongoose.model('product',InventorySchema)