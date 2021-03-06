// Or, if you're not using a transpiler:
const Eureka = require("eureka-js-client").Eureka;
// example configuration
const client = new Eureka({
    // application instance information
    instance: {
        app: "Inventory Service",
        instanceId: "inventoryService",
        hostName: "localhost",
        ipAddr: "127.0.0.1",
        port: {
            $: 8082,
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
const registerService = () => {
    client.start();
};

const deregisterService = () => {
    client.stop();
};

module.exports = { registerService, deregisterService };
