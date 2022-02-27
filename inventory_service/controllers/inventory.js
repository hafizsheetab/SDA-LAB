const Inventory = require("../Model/Inventory")
const getProduct = async (req, res) => {
    console.log("Getting Product")
    let product = await Inventory.findById(req.params.id)
    res.json(product)
}

const createProduct = async(req, res) => {
    console.log("Create Product")
    let {name, price} = req.body
    let product = new Inventory({
        name,
        price
    })
    await product.save()
    res.json(product)
}

module.exports = {getProduct, createProduct}