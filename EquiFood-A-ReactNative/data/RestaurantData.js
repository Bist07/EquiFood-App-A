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
        id: 0,
        name: "Subway", //conn.query("SELECT storeName FROM Restaurant WHERE storeID=0"),
        logo: "https://francorpbaltic.com/wp-content/uploads/2020/10/SUBWAY-LOGO-2.png", //conn.query("SELECT restaurantImg FROM Restaurant WHERE storeID=0"),
        cuisines: "Sandwiches", //conn.query("SELECT cuisineStlye FROM Restaurant WHERE storeID=0"),
        average_cost_for_two: 20, //conn.query("SELECT avgCostForTwo FROM Restaurant WHERE storeID=0"),
        address: "3333 University Way, Kelowna, BC", //conn.query("SELECT address FROM Restaurant WHERE storeID=0"),
        latitude: 49.940049, //conn.query("SELECT latitude FROM Restaurant WHERE storeID=0"),
        longitude: -119.397933, //conn.query("SELECT longtitude FROM Restaurant WHERE storeID=0"),
        hours: "Monday - Sunday: 8AM - 2AM", //conn.query("SELECT openHours FROM Restaurant WHERE storeID=0"),
        menu: [
            {
                "id": 100,
                "store": 0,
                "name": "Brocolli Cheddar Soup",
                "originalPrice": 1.99,
                "discountPrice": 0.85,
                "servingsLeft": 6,
                "imgUrl": "https://assets3.thrillist.com/v1/image/3110984/1584x1054/crop;webp=auto;jpeg_quality=60.jpg"
            },
            {
                "id": 200,
                "store": 0,
                "name": "Black Forest Ham Sub",
                "originalPrice": 9.99,
                "discountPrice": 5.50,
                "servingsLeft": 4,
                "imgUrl": "https://www.subway.com/ns/images/menu/CAN/ENG/Subway_6in_BlackForestHam_234x140_72_RGB.jpg"
            },
            {
                "id": 300,
                "store": 0,
                "name": "White Chocolate Macadamian Cookie",
                "originalPrice": 2.00,
                "discountPrice": 0.50,
                "servingsLeft": 12,
                "imgUrl": "https://images.chickadvisor.com/item/47200/375/i/subway-cookies.jpg?ic=3"
            },
        ],
    },
    {
        id: 1,
        name: "Freshii", //conn.query("SELECT storeName FROM Restaurant WHERE storeID=1"),
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freshii_logo.svg/500px-Freshii_logo.svg.png", //conn.query("SELECT restaurantImg FROM Restaurant WHERE storeID=1"),
        cuisines: "Healthy", //conn.query("SELECT cuisineStlye FROM Restaurant WHERE storeID=1"),
        average_cost_for_two: 20, //conn.query("SELECT avgCostForTwo FROM Restaurant WHERE storeID=1"),
        address: "5538 Airport Way, Kelowna, BC", //conn.query("SELECT address FROM Restaurant WHERE storeID=1"),
        latitude: 49.95102, //conn.query("SELECT latitude FROM Restaurant WHERE storeID=1"),
        longitude: -119.38151, //conn.query("SELECT longtitude FROM Restaurant WHERE storeID=1"),
        hours: "Monday - Sunday: 8AM - 8PM", //conn.query("SELECT openHours FROM Restaurant WHERE storeID=1"),
        menu:[
            {
                "id": 100,
                "store": 1,
                "name": "Buddha Satay Bowl",
                "originalPrice": 10.00,
                "discountPrice": 6.00,
                "servingsLeft": 3,
                "imgUrl": "https://www.freshii.com/static/img/bowls-buddas-satay.1266cfb.jpg"
            },
        ],
    },
    {
        id: 2,
        name: "Jugo Juice", //conn.query("SELECT storeName FROM Restaurant WHERE storeID=1"),
        logo: "https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/127154850_4174562302594841_4174389664354802097_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AZixSTKNy6UAX_iwtqC&_nc_ht=scontent-ord5-2.xx&oh=00_AfDjl_2b4P3Hz1HZ0jDqkOaCswuTyu5nVr_19ONbra6OuQ&oe=63EADFB8", //conn.query("SELECT restaurantImg FROM Restaurant WHERE storeID=2"),
        cuisines: "Drink", //conn.query("SELECT cuisineStlye FROM Restaurant WHERE storeID=2"),
        average_cost_for_two: 20, //conn.query("SELECT avgCostForTwo FROM Restaurant WHERE storeID=2"),
        address: "4075 Gordon Drive, Kelowna, BC", //conn.query("SELECT address FROM Restaurant WHERE storeID=2"),
        latitude: 49.837789, //conn.query("SELECT latitude FROM Restaurant WHERE storeID=2"),
        longitude: -119.481287, //conn.query("SELECT longtitude FROM Restaurant WHERE storeID=2"),
        hours: "Monday - Sunday: 8AM - 6PM", //conn.query("SELECT openHours FROM Restaurant WHERE storeID=2"),
        menu:[
            {
                "id": 100,
                "store": 2,
                "name": "Mocha Protein Smoothie",
                "originalPrice": 6.00,
                "discountPrice": 3.50,
                "servingsLeft": 2,
                "imgUrl": "https://jugojuice.com/wp-content/uploads/2021/04/JJ21_WEB_001_SMOOTHIESnJUICES_Mocha-Protein.png"
            },
            {
                "id": 200,
                "store": 2,
                "name": "Mighty Kale Smoothie",
                "originalPrice": 6.00,
                "discountPrice": 3.50,
                "servingsLeft": 3,
                "imgUrl": "https://jugojuice.com/wp-content/uploads/2021/04/SMOOTHIE_MightyKale-1.png"
            },
        ],
    },
];