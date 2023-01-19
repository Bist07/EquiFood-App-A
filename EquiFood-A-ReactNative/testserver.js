const mariadb = require("mariadb");
require('dotenv').config({ silent: true })
const fs = require("fs");

// Certificate Authority (CA)",
const serverCert = [fs.readFileSync("\aws_skysql_chain.pem", "utf8")];

// Main function
async function main() {
    let conn;

    try {
        conn = await mariadb.createConnection({
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

        // Use Connection to get contacts data
        var rows = await get_contacts(conn);

        //Print list of contacts

        console.log(rows);

    } catch (err) {
        // Manage Errors
        console.log(err);
    } finally {
        // Close Connection
        if (conn) conn.close();
    }
}

//Get list of contacts
function get_contacts(conn) {
    return conn.query("SELECT * FROM Restaurant");
}

main();
