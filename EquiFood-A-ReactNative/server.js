var mariadb = require('mariadb');

//require('dotenv').config();
require('dotenv').config({ silent: true })

// 1.) Access the Node File System package
const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
const serverCert = [fs.readFileSync("\aws_skysql_chain.pem", "utf8")];
var DB_HOST = "equifooda - db00009082.mdb0002659.db1.skysql.net";
var DB_USER = "DB00009082";
var DB_HOST = "B0w!W3Q[ovzdPZek7GvUG729";
var DB_PORT = 5001;
var DB_NAME = "equifooda";

// Create a connection pool
var pool =
    mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME//,
        // 3.) Add an "ssl" property to the connection pool configuration, using the serverCert const defined above
        // ssl: {
        //       ca: serverCert
        // }
    });

// Expose the Pool object within this module
module.exports = Object.freeze({
    pool: pool
});