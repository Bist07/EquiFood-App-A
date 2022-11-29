const http = require('http');
const express = require('express'), bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    connectionLimit: 5
});

app.get('/test',async(req,res) =>{
    let conn;
    try{
        conn = await pool.getConnection();
        const rows = await conn.query('')
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(jsonS)
    }
    catch(e){}
});

http.createServer(app).listen(1337, ()=>{
    console.log('Express Server start 1337');

});