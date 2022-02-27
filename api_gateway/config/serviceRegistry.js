// Or, if you're not using a transpiler:
const Eureka = require("eureka-js-client").Eureka;
const axios = require("axios")
// example configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: "API Gateway",
        instanceId: "apiGateway",
        hostName: "localhost",
        ipAddr: "127.0.0.1",
        port: {
            $: 8084,
            "@enabled": "true",
        },
        vipAddress: "test.customerservice.com",
        dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn",
        },
        registerWithEureka: true,
        fetchRegistry: true,
    },
    eureka: {
        // eureka server host / port
        host: "localhost",
        port: 8761,
        servicePath: "/eureka/apps",
    },
});

client.logger.level("debug");
const registerService = async () => {
    client.start(); 
};

const deregisterService = () => {
    client.stop();
};

const getServiceInstance = async (serviceName) => {
    let response = await axios.get("http://localhost:8761/eureka/apps")
    let applications = response.data.applications.application
    return applications.find(application => application.name === serviceName).instance[0]
}
;

module.exports = { registerService, deregisterService, getServiceInstance };



