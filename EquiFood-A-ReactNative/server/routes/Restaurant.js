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
});

router.post('/insertRestaurant', async function(req, res){
    try {
        const {id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img} = req.body;

        const sqlQuery = 'INSERT INTO restaurant (id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img) VALUES (?,?,?,?,?,?,?,?,?,?)'
        const result = await pool.query(sqlQuery, [id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img]);


        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;