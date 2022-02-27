const Employee = require("../Model/Employee")
const getEmployee = async (req, res) => {
    let employee = await Employee.findById(req.params.id)
    res.json(employee)
}

const createEmployee = async(req, res) => {
    let {name, email} = req.body
    let employee = new Employee({
        name,
        email
    })
    await employee.save()
    res.json(employee)
}

module.exports = {getEmployee, createEmployee}