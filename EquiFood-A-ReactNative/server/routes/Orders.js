import express from 'express'
import { pool } from '../helpers/database.js'
export const router = express.Router()
//get all by id and pending/accepted orders

router.get('/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM food_order WHERE order_status<2 AND restaurant_id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.get('/OrderDetails/:id', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM order_menu_item food_order_id=?'; //defines query
        const rows = await pool.query(sqlQuery, req.params.id); //rows = your returned query data
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/OrderInsert', async function (req, res) {
    try {
        // customer_id restaurant_id order_status_id total_amount reservation_datetime customer_rating discount
        const { customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount } = req.body;
        const sqlQuery = "INSERT INTO food_order (customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount) VALUES (?,?,?,?,?,?)";
        const result = await pool.query(sqlQuery, [customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount]);
        res.status(200).send("Order Added");
    } catch (error) {
        res.status(400).send(error.message)
    }
})
