const express = require('express')
const pool = require('../helpers/database')
const router = express.Router()

//get by id
router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM menu_item WHERE restaurant_id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})



router.post('/FoodInsert', async function (req, res) {
    try {
        const {item_name, price, restaurant_id, original_price, quantity} = req.body;
        // const item_name = req.body.item_name;
        // const price = req.body.price;
        // const restaurant_id = req.body.restaurant_id;
        // const original_price = req.body.original_price;
        // const quantity = req.body.quantity;
        const sqlQuery = "INSERT INTO menu_item (item_name, price, restaurant_id, original_price, quantity) VALUES (?,?,?,?,?)";
        const result = await pool.query(sqlQuery, [item_name, price, restaurant_id, original_price, quantity]);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).send(error.message)
    }
})



module.exports = router;