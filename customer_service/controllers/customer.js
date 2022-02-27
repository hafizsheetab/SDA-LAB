const Customer = require("../Model/Customer")
const getCustomer = async (req, res) => {
    let customer = await Customer.findById(req.params.id)
    res.json(customer)
}

const createCustomer = async(req, res) => {
    let {name, email} = req.body
    let customer = new Customer({
        name,
        email
    })
    await customer.save()
    res.json(customer)
}

module.exports = {getCustomer, createCustomer}