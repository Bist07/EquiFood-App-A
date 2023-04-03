import mariadb from 'mariadb';


import dotenv from 'dotenv';
dotenv.config();

// 1.) Access the Node File System package
import fs from 'fs';

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
const serverCert = [fs.readFileSync("aws_skysql_chain.pem", "utf8")];


// Create a connection pool
export const pool =
    mariadb.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        multipleStatements: true,
        connectionLimit: 5,
        // 3.) Add an "ssl" property to the connection pool configuration, using the serverCert const defined above
        ssl: {
            ca: serverCert
        }

    });


//Connect and check for errors


pool.getConnection((err, connection) => {
    if (err) {
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            Console.ERROR('Database connection lost');
        }
        if (err.code == 'ER_CON_COUNT_ERROR') {
            Console.ERROR('Database has too many connections');
        }
        if (err.code == 'ECONNREFUSED') {
            Console.ERROR('Database connection was refused');
        }
    }
    if (connection) connection.release();

    return;
})
