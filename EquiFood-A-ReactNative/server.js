var mariadb = require('mariadb');

//require('dotenv').config();
require('dotenv').config({ silent: true })

// 1.) Access the Node File System package
const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
const serverCert = [fs.readFileSync("\aws_skysql_chain.pem", "utf8")];
DB_HOST = "equifooda-db00009090.mdb0002659.db1.skysql.net";
DB_USER = "DB00009090";
DB_PASS = "bogiXUAS(ifEK254dnCUYVsN";
DB_PORT = 5001;
DB_NAME = "equifooda";

console.log("lol");
// Create a connection pool
var pool =
    mariadb.createPool({
        host: "equifooda-db00009090.mdb0002659.db1.skysql.net",//process.env.DB_HOST,
        user: "DB00009090",//process.env.DB_USER,
        password: "bogiXUAS(ifEK254dnCUYVsN",//process.env.DB_PASS,
        port: 5001,//process.env.DB_PORT,
        database: "equifooda",// process.env.DB_NAME//,
        // 3.) Add an "ssl" property to the connection pool configuration, using the serverCert const defined above
        ssl: {
            ca: serverCert
        }
    });

console.log("lol2");

// Expose the Pool object within this module
module.exports = Object.freeze({
    pool: pool
});
