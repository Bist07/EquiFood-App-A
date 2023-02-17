const express = require('express');
const pool = require('../helpers/database');  // define connection pool
const router = express.Router();

router.get('/:id', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM customer WHERE id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        console.log(rows.slice(rows.indexOf('}'))); // print row data minus all the fluff
        res.status(200).json(rows); //display row data on local host
     
    } catch (error) {

     res.status(400).send(error.message)
    }


    //res.status(200).json({Username:req.params.Username})
} );


router.post('/register',  async function(req,res){
    try {
       
        const {Email, Password} = req.body;

        const encryptedPassword = await bcrypt.hash(Password, 10);

        const sqlQuery = 'INSERT INTO Users (Email, Password) VALUES (?,?)';
        const result = await pool.query(sqlQuery, [Email, Password]);
        
        res.status(200).json({Username: result.insertUsername});
    } catch (error) {
        res.status(400).send(error.message)
}
});

router.post('/login', async function(req,res){
     try{
         const {id, Password} = req.body; //change to email in future

         const sqlGetUser = 'SELECT password FROM user WHERE id=?';
         const rows = await pool.query(sqlGetUser, id); //pulls user id
         if(rows){
             res.status(200).json(rows[0]) //returns json rows
         }
         res.status(200).send('User with id ${id} was not found') //also need to change to email in future
     }catch(error){
         res.status(400).send(error.message)
     }

 });




module.exports = router;
