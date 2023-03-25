import express from 'express'
import { pool } from '../helpers/database.js'
export const router = express.Router()
//get all by id and pending/accepted orders

// Get all menu items based on food order id
router.get("/OrderDetails/:id", async function (req, res) {
  try {
    const sqlQuery = "SELECT M.item_name, M.price, M.img_id, M.original_price, O.qty_ordered FROM order_menu_item O JOIN menu_item M ON O.menu_item_id = M.id WHERE food_order_id=?";
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/OrderInsert", async function (req, res) {
  try {
    // customer_id restaurant_id order_status_id total_amount reservation_datetime customer_rating discount
    const {
      customer_id,
      restaurant_id,
      order_status_id,
      total_amount,
      reservation_datetime,
      discount,
    } = req.body;
    const sqlQuery =
      "INSERT INTO food_order (customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount) VALUES (?,?,?,?,?,?)";
    const result = await pool.query(sqlQuery, [
      customer_id,
      restaurant_id,
      order_status_id,
      total_amount,
      reservation_datetime,
      discount,
    ]);
    res.status(200).send("Order Added");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

