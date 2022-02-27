const connectDB = require("./config/db")
require('dotenv').config()
const {registerService, deregisterService} = require("./config/serviceRegistry")
const { getCustomer, createCustomer } = require("./controllers/customer")
const express = require("express")
const app = express()
app.use(express.json({extende:false}))
connectDB()
registerService()
app.get("/customers/:id", getCustomer)
app.post("/customers", createCustomer)

const PORT = process.env.PORT || 8080;

process.on("exit", () => {
    deregisterService()
})
process.on("SIGINT", () => {
    console.log("Process exiting")
    deregisterService()
    process.exit()
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));