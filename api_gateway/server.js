var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
const express = require("express");
var proxy = require('express-http-proxy');
const { getServiceInstance, registerService } = require('./config/serviceRegistry');
const app = express()
registerService()
// app.use(express.json({extende:true}))
// app.use(express.json({ limit: "16mb" }));
// app.use(
//     express.urlencoded({ limit: "16mb", extended: true, parameterLimit: 50000 })
// );

app.all(["/customers","/customers/*"], async (req, res) => {
    let instance = await getServiceInstance("CUSTOMER SERVICE")
    apiProxy.web(req, res, {target: `http://${instance.ipAddr}:${instance.port["$"]}`})
})

app.all(["/employees", "/employees/*"], async (req, res) => {
    let instance = await getServiceInstance("EMPLOYEE SERVICE")
    apiProxy.web(req, res, {target: `http://${instance.ipAddr}:${instance.port["$"]}`})
})

app.all(["/products","/products/*"], async (req, res) => {
    let instance = await getServiceInstance("INVENTORY SERVICE")
    apiProxy.web(req, res, {target: `http://${instance.ipAddr}:${instance.port["$"]}`})
})


app.all(["/orders","/orders/*"], async (req, res) => {
    let instance = await getServiceInstance("ORDER SERVICE")
    apiProxy.web(req, res, {target: `http://${instance.ipAddr}:${instance.port["$"]}`})
})

const PORT = process.env.PORT || 8084;
  
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));