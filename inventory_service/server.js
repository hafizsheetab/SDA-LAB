const connectDB = require("./config/db");
require("dotenv").config();
const {
    registerService,
    deregisterService,
} = require("./config/serviceRegistry");
const { getProduct, createProduct } = require("./controllers/inventory");
const express = require("express");
const app = express();
app.use(express.json({extende:true}))
connectDB();
registerService();
app.get("/products/:id", (req, res) => {
    getProduct(req, res);
});
app.post("/products", (req, res) => {
    console.log("post");
    createProduct(req, res);
});

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
