import express from 'express'
import { pool } from '../helpers/database.js'
export const router = express.Router()

//get restaurant menu items by id
router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM menu_item WHERE restaurant_id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//get menu item information based on menu_id
router.get('/:menu_id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM menu_item WHERE id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.menu_id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Insert food menu items
router.post('/FoodInsert', async function (req, res) {
    try {
        const { item_name, price, restaurant_id, ImageURL, original_price, quantity } = req.body;
        const sqlQuery = "INSERT INTO menu_item (item_name, price, restaurant_id, imageURL, original_price, quantity) VALUES (?,?,?,?,?,?)";
        const result = await pool.query(sqlQuery, [item_name, price, restaurant_id, ImageURL, original_price, quantity]);
        res.status(200).send("Food Added");
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/Update', async function (req, res) {
    try {
        const { data } = req.body;
        console.log(data);
        console.log([data.item_name, data.price, data.imageURL, data.original_price, data.quantity, data.id]);
        const sqlQuery = "UPDATE menu_item SET item_name = ?, price = ?, original_price = ?, quantity = ? WHERE id = ?";
        const result = await pool.query(sqlQuery, [data.item_name, data.price, data.original_price, data.quantity, data.id]);
        res.status(200).send({ id: data.id, status: "updated" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});
