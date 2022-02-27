const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = Employee = mongoose.model('employee',EmployeeSchema)