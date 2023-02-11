//Connect to database - MUST HAVE SERVER RUNNING LOCALLY FOR NOW
const mariadb = require('mariadb')
const Pool = mariadb.createPool({  
    host: "equifooda-db00009090.mdb0002659.db1.skysql.net",//process.env.DB_HOST,
    user: "DB00009090",//process.env.DB_USER,
    password: "bogiXUAS(ifEK254dnCUYVsN"
    
});
//Function to Insert a new Restaurant into the Database \/
//prompt("Please enter restaurant id, name, logo path, cuisine, average cost for two, ")


//Test function
function createRestaurant(){
    let conn;
    try{
        conn =  mariadb.getConnection()
        const rest = conn.query("INSERT INTO Restuarant value (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [8, "PizzaHut", "fast pizza and sides", 0, "pizza", "1234 Road drive", "11am - 8pm", "imagePathGoesHere", 20, 123.9303, 232.033])
        prompt(conn.query("SELECT * FROM Restaurant"));
    } catch (err){
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}
