const connectDB = require("./config/db")
require('dotenv').config()
const {registerService, deregisterService} = require("./config/serviceRegistry")
const { getOrder, createOrder } = require("./controllers/order")
const express = require("express")
const app = express()
app.use(express.json({extende:false}))
connectDB()
registerService()
app.get("/orders/:id", getOrder)
app.post("/orders", createOrder)

const PORT = process.env.PORT || 8083;
  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));