const express = require('express')
const pool = require('../helpers/database')
const router = express.Router()

//getting all
router.get('/', async function (req, res) {
    try {
        const sqlQuery = "SELECT * FROM Restaurant"
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})





module.exports = router;