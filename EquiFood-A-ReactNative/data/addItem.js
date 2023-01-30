//SERVER MUST BE RUNNING LOCALLY FOR NOW
const mariadb = require('mariadb')
const Pool = mariadb.createPool({  
    host: "equifooda-db00009090.mdb0002659.db1.skysql.net",//process.env.DB_HOST,
    user: "DB00009090",//process.env.DB_USER,
    password: "bogiXUAS(ifEK254dnCUYVsN"
    
});
//Function to Insert a new Food item into the Database \/


//Test function
function createRestaurant(){
    let conn;
    try{
        conn =  mariadb.getConnection()
        const rest = conn.query("INSERT INTO Food value (?, ?, ?, ?, ?, ?, ?, ?)", [8, "Cheese Pizza, Large", 36, 25, 10, "16 inch 4 cheese pizza", 3, "IMAGE PATH HERE"]);
        const rest2 = conn.query("INSERT INTO Food value (?, ?, ?, ?, ?, ?, ?, ?)", [8, "Peperoni Pizza, Large", 37, 30, 13, "16 inch peperoni pizza", 1, "IMAGE PATH HERE"]);
        const rest3 = conn.query("INSERT INTO Food value (?, ?, ?, ?, ?, ?, ?, ?)", [8, "Chicken Wings", 38, 12, 5, "12 chicken wings in spicy buffalo sauce", 5, "IMAGE PATH HERE"]);
        prompt(conn.query("SELECT * FROM Food WHERE storeID=8"));
} catch (err){
    throw err;
} finally {
    if (conn) return conn.end();
}

<<<<<<< HEAD
}
=======
}
>>>>>>> develop
