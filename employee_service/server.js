const connectDB = require("./config/db")
require('dotenv').config()
const {registerService, deregisterService} = require("./config/serviceRegistry")
const { getEmployee, createEmployee } = require("./controllers/employee")
const express = require("express")
const app = express()
app.use(express.json({extende:false}))
connectDB()
registerService()
app.get("/employees/:id", getEmployee)
app.post("/employees", createEmployee)

const PORT = process.env.PORT || 8081;
  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));