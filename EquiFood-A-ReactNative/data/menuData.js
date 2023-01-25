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




export default [
    {
        "id": 1,
        "store": 0,
        "name": "Broccoli Cheddar Soup", //conn.query("SELECT itemName FROM Food WHERE itemID=1"),
        "originalPrice": 1.99, //conn.query("SELECT retailPrice FROM Food WHERE itemID=1"),
        "discountPrice": 0.85, //conn.query("SELECT discountedPrice FROM Food WHERE itemID=1"),
        "servingsLeft": 6, //conn.query("SELECT availablePortions FROM Food WHERE itemID=1"),
        "imgUrl": "https://assets3.thrillist.com/v1/image/3110984/1584x1054/crop;webp=auto;jpeg_quality=60.jpg" //conn.query("SELECT itemImg FROM Food WHERE itemID=1"),
    },
    {
        "id": 2,
        "store": 0,
        "name": "Black Forest Ham Sub", //conn.query("SELECT itemName FROM Food WHERE itemID=2"),
        "originalPrice": 9.99, //conn.query("SELECT retailPrice FROM Food WHERE itemID=2"),
        "discountPrice": 5.50, //conn.query("SELECT discountedPrice FROM Food WHERE itemID=2"),
        "servingsLeft": 4, //conn.query("SELECT availablePortions FROM Food WHERE itemID=2"),
        "imgUrl": "https://www.subway.com/ns/images/menu/CAN/ENG/Subway_6in_BlackForestHam_234x140_72_RGB.jpg" //conn.query("SELECT itemImg FROM Food WHERE itemID=2"),
    },
    {
        "id": 3,
        "store": 0,
        "name": "White Chocolate Macadamian Cookie", //conn.query("SELECT itemName FROM Food WHERE itemID=3"),
        "originalPrice": 2.00, //conn.query("SELECT retailPrice FROM Food WHERE itemID=3"),
        "discountPrice": 0.50, //conn.query("SELECT discountedPrice FROM Food WHERE itemID=3"),
        "servingsLeft": 12, //conn.query("SELECT availablePortions FROM Food WHERE itemID=3"),
        "imgUrl": "https://images.chickadvisor.com/item/47200/375/i/subway-cookies.jpg?ic=3" //conn.query("SELECT itemImg FROM Food WHERE itemID=3"),
    },
    {
        "id": 4,
        "store": 1,
        "name": "Buddha Satay Bowl", //conn.query("SELECT itemName FROM Food WHERE itemID=4"),
        "originalPrice": 10.00, //conn.query("SELECT retailPrice FROM Food WHERE itemID=4"),
        "discountPrice": 6.00,//conn.query("SELECT discountedPrice FROM Food WHERE itemID=4"),
        "servingsLeft": 3, //conn.query("SELECT availablePortions FROM Food WHERE itemID=4"),
        "imgUrl": "https://www.freshii.com/static/img/bowls-buddas-satay.1266cfb.jpg" //conn.query("SELECT itemImg FROM Food WHERE itemID=4"),
    },
    {
        "id": 6,
        "store": 2,
        "name": "Mocha Protein Smoothie", //conn.query("SELECT itemName FROM Food WHERE itemID=6"),
        "originalPrice": 6.00, //conn.query("SELECT retailPrice FROM Food WHERE itemID=6"),
        "discountPrice": 3.50, //conn.query("SELECT discountedPrice FROM Food WHERE itemID=6"),
        "servingsLeft": 2, //conn.query("SELECT availablePortions FROM Food WHERE itemID=6"),
        "imgUrl": "https://jugojuice.com/wp-content/uploads/2021/04/JJ21_WEB_001_SMOOTHIESnJUICES_Mocha-Protein.png" //conn.query("SELECT itemImg FROM Food WHERE itemID=6"),
    },
    {
        "id": 7,
        "store": 2,
        "name": "Mighty Kale Smoothie", //conn.query("SELECT itemName FROM Food WHERE itemID=7"),
        "originalPrice": 6.00, //conn.query("SELECT retailPrice FROM Food WHERE itemID=7"),
        "discountPrice": 3.50, //conn.query("SELECT discountedPrice FROM Food WHERE itemID=7"),
        "servingsLeft": 3, //conn.query("SELECT availablePortions FROM Food WHERE itemID=7"),
        "imgUrl": "https://jugojuice.com/wp-content/uploads/2021/04/SMOOTHIE_MightyKale-1.png" //conn.query("SELECT itemImg FROM Food WHERE itemID=7"),
    },
]