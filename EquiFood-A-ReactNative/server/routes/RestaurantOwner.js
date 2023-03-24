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
        const { email, enteredPassword } = req.body; //change to email in future
        const sqlGetUser = 'SELECT passwordHash FROM customer WHERE email = ?';
        const rows = await pool.query(sqlGetUser, [email]); //pulls user id
       
       
        if (rows) {
            var isValid = false;
           
            if(enteredPassword == rows[0].passwordHash){
              isValid = true;
                
            };
          
            console.log(rows[0].passwordHash)
            console.log(enteredPassword)
            console.log(isValid)
            res.status(200).json({PasswordGood: isValid})
            
    
         
        }
        res.status(200).send() //also need to change to email in future

    } catch (error) {
        res.status(400).send(error.message)
    }

});




module.exports = router;