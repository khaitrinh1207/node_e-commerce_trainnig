const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

// count connection
const countConnect =  () => {
    const numConnection = mongoose.connections.length;
    return numConnection;
};

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = countConnect();
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnections = numCores * 5;

        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} Mb`);

        if(numConnection > maxConnections) {
            console.log(`Connection overload detected !!!`);
        }
    }, 5000);
}

module.exports = {countConnect, checkOverload};