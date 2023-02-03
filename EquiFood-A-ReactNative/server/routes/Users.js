const express = require('express');
const pool = require('../helpers/database');  // define connection pool
const router = express.Router();

router.get('/:Username', async function(req,res){
    try {
        const sqlQuery = 'SELECT Username, Firstname, Lastname, Email, Password, created FROM Users WHERE Username=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.Username); //rows = your returned query data
        console.log(rows.slice(rows.indexOf('}'))); // print row data minus all the fluff
        res.status(200).json(rows); //display row data on local host
     
    } catch (error) {
     res.status(400).send(error.message)
    }


    //res.status(200).json({Username:req.params.Username})
} )

module.exports = router;