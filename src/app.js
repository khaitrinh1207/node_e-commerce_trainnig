const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("common")); // log
app.use(helmet());

// app.use(compression());

// init db
require('./dbs/init.mongodb');
const {checkOverload} = require('./helper/check.connect')
checkOverload();
//init routers
app.get("/", (req, res, next) => {
    const str = `Hello`;
    return res.status(200).json({
        msg: `Hello world`,
        metadata: str.repeat(1000000),
    })
})

// handle errors

module.exports = app