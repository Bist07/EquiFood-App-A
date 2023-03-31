import express from "express";
import { pool } from "../helpers/database.js";
export const router = express.Router();
//get all by id and pending/accepted orders

//get customer id, order id, cost, discount, status, reservation from tables
router.get("/:id", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT F.customer_id, F.id, F.total_amount, F.reservation_datetime, O.status_value FROM food_order F JOIN order_status O ON F.order_status_id = O.id WHERE O.status_value<2 AND restaurant_id=?"; //defines query
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all menu items based on food order id
router.get("/OrderDetails/:id", async function (req, res) {
  try {
    const sqlQuery =`
      SELECT 
        M.item_name, M.price, M.ImageURL, M.original_price, O.qty_ordered 
      FROM 
        order_menu_item O JOIN menu_item M 
      ON 
        O.menu_item_id = M.id 
      WHERE 
        food_order_id=?
    `;
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/OrderInsert", async function (req, res) {
  try {
    const data = req.body;

    // Transaction either fully completes, or rolls back if COMMIT is not reached
    const sqlQuery = `
      START TRANSACTION;

        INSERT INTO order_status (status_value) VALUES (0);
        
        SET @order_status_id = LAST_INSERT_ID();

        INSERT INTO food_order (customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount)
          VALUES (?, ?, @order_status_id, ?, ?, ?);
        SET @food_order_id = LAST_INSERT_ID();

      COMMIT;
      `;

    const result = await pool
      .query(sqlQuery, [
        data.customer_id,
        data.restaurant_id,
        data.total_amount,
        data.reservation_datetime,
        data.discount,
      ])
      .then(() => {
        console.log("Transaction completed successfully!");
      })
      .catch((err) => {
        console.error("Error during transaction", err);
        pool
          .query("ROLLBACK")
          .then(() => {
            console.log("Transaction rolled back!");
          })
          .catch((err) => {
            console.error("Error rolling back transaction: ", err);
          });
      });
    res.status(200).send("Order Added");
  } catch (error) {
    res.status(400).send("Error connecting to MariaDB: ", error.message);
  }
});


router.post("/InsertOrderMenuItem", async function (req, res) {
  let conn;
  try {
    const menuItems = req.body;
    conn = await pool.getConnection();

    // Transaction either fully completes, or rolls back if COMMIT is not reached
    await conn.beginTransaction();

    const sqlQuery1 = `SELECT @food_order_id AS lastFoodOrderID`;
    const [result] = await conn.execute(sqlQuery1);
    if (result && result.length > 0){
      const lastFoodOrderID = result[0].lastFoodOrderID;
    }
    // const lastFoodOrderID = rows[0].lastFoodOrderID;

    const sqlQuery2 = `
      INSERT INTO order_menu_item (food_order_id, menu_item_id, qty_ordered)
      VALUES (?, ?, ?);
    `;

    if(Array.isArray(menuItems)){
      const insertValues = menuItems.map(item => [lastFoodOrderID, item.id, item.quantity]);
      await conn.execute(sqlQuery2, insertValues);
      await conn.commit();
      conn.release();
      res.status(200).send("Menu Order Items added correctly");
    } else{
      const insertValues = [lastFoodOrderID, menuItems.id, menuItems.quantity]
      await conn.execute(sqlQuery2, insertValues);
      await conn.commit();
      conn.release();
      res.status(200).send("Menu Order Items added correctly");
    }
    
  } catch (error) {
    console.error(error);
    if(conn){
      await conn.rollback();
      conn.release();
    }
    res.status(400).send(error.message);
  }
});
