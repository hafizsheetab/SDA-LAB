const Order = require("../Model/Order")
const getOrder = async (req, res) => {
    let customer = await Order.findById(req.params.id)
    res.json(customer)
}

const createOrder = async(req, res) => {
    let {productId, sellerId, customerId} = req.body
    let order = new Order({
        productId,
        sellerId,
        customerId
    })
    await order.save()
    res.json(order)
}

module.exports = {getOrder, createOrder}