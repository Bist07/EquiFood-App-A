const express = require('express')
const pool = require('../helpers/database')
const router = express.Router()

//getting all
router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM menu_item WHERE id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})





module.exports = router;