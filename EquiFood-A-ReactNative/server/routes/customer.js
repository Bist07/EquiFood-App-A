const express = require('express');
const pool = require('../helpers/database');  // define connection pool
const router = express.Router();




router.post('/register', async function(req, res){
    try {
       // const {id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img} = req.body;
       const {first_name, last_name, email, passwordHash} = req.body;
        const sqlQuery = "INSERT INTO customer (first_name, last_name, email, passwordHash) VALUES (?,?,?,?)";
        const result = await pool.query(sqlQuery, [first_name, last_name, email, passwordHash]);

      
        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Registered!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/login', async function (req, res) {
    try {
        const { id, Password } = req.body; //change to email in future

        const sqlGetUser = 'SELECT password FROM user WHERE id=?';
        const rows = await pool.query(sqlGetUser, id); //pulls user id
        if (rows) {
            res.status(200).json(rows[0]) //returns json rows
        }
        res.status(200).send('User with id ${id} was not found') //also need to change to email in future
    } catch (error) {
        res.status(400).send(error.message)
    }

});




module.exports = router;
