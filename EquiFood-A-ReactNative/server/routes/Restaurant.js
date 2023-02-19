const express = require('express')
const pool = require('../helpers/database')
const router = express.Router()

//getting all
router.get('/', async function (req, res) {
    try {
        const sqlQuery = "SELECT * FROM restaurant"
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//get by id
router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM restaurant WHERE id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


    //res.status(200).json({Username:req.params.Username})
});




module.exports = router;