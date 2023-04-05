import express from "express";
import { pool } from "../helpers/database.js";
export const router = express.Router();


//gets total donations across all restaurants
router.get("/totalDonations", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT SUM(fo.discount) FROM food_order fo JOIN order_status os ON fo.order_status_id = os.id WHERE os.status_value = 'completed'"; //defines query
    const rows = await pool.query(sqlQuery);
    res.status(200).json({totalAmount: rows});
    console.log(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//gets donation amounts for each restaurant
router.get("/donationsPerRestaurant", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT SUM(fo.discount) as discount, fo.restaurant_id, r.name FROM food_order fo JOIN order_status os ON fo.order_status_id = os.id JOIN restaurant r ON fo.restaurant_id = r.id WHERE os.status_value = 'completed' GROUP BY fo.restaurant_id"; //defines query
    const rows = await pool.query(sqlQuery);
    res.status(200).json({Object: rows});
    console.log(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//get customer id, customer name, order id, cost, discount, status, reservation from tables
router.get("/:id", async function (req, res) {
  try {
    const sqlQuery =
      "SELECT F.customer_id, F.id, F.total_amount, F.reservation_datetime, O.status_value, C.first_name, C.last_name FROM food_order F JOIN order_status O ON F.order_status_id = O.id JOIN customer C ON F.customer_id = C.id WHERE O.status_value<2 AND restaurant_id=?"; //defines query
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/UpdateStatus", async function (req, res) {
  try{
    const {id, status} = req.body;
    const sqlQuery = "UPDATE order_status OS JOIN food_order FO ON OS.id=FO.order_status_id SET status_value = ? WHERE OS.id = ?";
    await pool.query(sqlQuery, [status, id], (error, res) => {
      if(error){
        res.status(400).send(error.message);
      }
      res.status(200).send("Order Status Updated");
    });
  } catch(error){
    res.status(400).send(error.message);
  }
});

router.put("/CompleteOrder", async function (req, res) {
  let conn;
  try{
    conn = await pool.getConnection();
    await conn.beginTransaction();

    //Set accepted order to completed
    const {id, status} = req.body;
    const sqlQuery = `
    UPDATE 
      order_status OS JOIN
      food_order FO ON OS.id=FO.order_status_id
    SET 
      OS.status_value = ?
    WHERE 
      OS.id = ?`;
    await conn.query(sqlQuery, [status, id]);

    //Update menu item quantities
    const sqlQuery2 = `
    UPDATE 
      order_status OS 
      JOIN food_order FO ON OS.id = FO.order_status_id
      JOIN order_menu_item OMI ON FO.id = OMI.food_order_id
      JOIN menu_item MI ON OMI.menu_item_id = MI.id
    SET 
      MI.quantity = MI.quantity - OMI.qty_ordered
    WHERE 
      OMI.food_order_id = ?`;

    conn.query(sqlQuery2, id);
    conn.commit();
    res.status(200).send("Order completed and menu quantities updated");
    
  } catch(error){
    await conn.rollback();
    res.status(400).send(error.message);
  } finally{
    if (conn){
      conn.release();
    }
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
  let conn;
  try {
    const data = req.body;
    conn = await pool.getConnection();

    // Transaction either fully completes, or rolls back if COMMIT is not reached
    await conn.beginTransaction();

    // Query does 2 things,
    // 1 - Creates an order_status of "pending" so it can be inserted to the food_order
    // 2 - Insert a food order which takes in customer/restaurant/order_status IDs, price total, reservation time, and discount total
    const sqlQuery = `
        INSERT INTO order_status (status_value) VALUES ("pending");
        
        SET @order_status_id = LAST_INSERT_ID();

        INSERT INTO food_order (customer_id, restaurant_id, order_status_id, total_amount, reservation_datetime, discount)
          VALUES (?, ?, @order_status_id, ?, ?, ?);

        SET @food_order_id = LAST_INSERT_ID();
      `;

    const result = await conn.query(sqlQuery, [
        data.customer_id,
        data.restaurant_id,
        data.total_amount,
        data.reservation_datetime,
        data.discount,
      ]);

    // const lastFoodOrderID = result[0].food_order_id;
    const menuItems = req.body.menuItems;
    
    // Query inserts an item and quantity into the order_menu_item
    const sqlQuery2 = `
      INSERT INTO order_menu_item (food_order_id, menu_item_id, qty_ordered)
      VALUES (?, ?, ?);
    `;
    
    // Gets the foodOrderID from previous insert query
    const foodOrderId = Number(result[2].insertId);

    if(menuItems.length > 1){
      // Maps cart items into array of 2 item arrays of [[menu_item_id, qty_ordered], [exampleId, exampleQuantity], ...]
      const insertValues = menuItems.map(item => [item.menu_item_id, item.qty_ordered]);

      // Loops through cart items and executes sqlQuery2 (inserting items in order to order_menu_item table)
      for (const item of insertValues){
        await conn.execute(sqlQuery2, [foodOrderId, item[0], item[1]]);
      }
      await conn.commit();
      conn.release();
      res.status(200).send("Menu Order Items added correctly");
    } else{
      // 
      const insertValues = [foodOrderId, menuItems[0].menu_item_id, menuItems[0].qty_ordered];
      await conn.execute(sqlQuery2, insertValues);
      await conn.commit();
      conn.release();
      res.status(200).send("Menu Order Items added correctly");
    }

    // res.status(200).send("Order Added");
  } catch (error) {
    res.status(400).send(error);
    conn.rollback();
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
