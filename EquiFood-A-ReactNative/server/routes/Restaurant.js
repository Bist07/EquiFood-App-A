import express from "express";
import { pool } from '../helpers/database.js'
export const router = express.Router()

//getting all
router.get('/', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM restaurant WHERE status=?';
        const rows = await pool.query(sqlQuery, 'accepted');
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//getting sorted alphabetically
router.get('/OrderedRestaurants', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM restaurant WHERE status=? ORDER BY name ASC';

        const rows = await pool.query(sqlQuery, 'accepted');
        // console.log("erroe"+ JSON.stringify(rows));
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//getting sorted by rating
router.get('/RatingRestaurants', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM restaurant WHERE status=? ORDER BY rating DESC';

        const rows = await pool.query(sqlQuery, 'accepted');
        // console.log("erroe"+ JSON.stringify(rows));
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

// Get restaurant requests
router.get('/Requests/Pending', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM restaurant WHERE status=?';
        const rows = await pool.query(sqlQuery, 'pending');
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/delete', async function (req, res) {
    try {
        const { id } = req.body;
        const sqlQuery = "DELETE FROM restaurant WHERE id = ?";
        const result = await pool.query(sqlQuery, [id]);
        res.status(200).send("Restaurant Deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.put('/Update', async function (req, res) {
    try {
        const { status, id } = req.body;
        const sqlQuery = "UPDATE restaurant SET status = ? WHERE id = ?";
        const result = await pool.query(sqlQuery, [status, id]);
        res.status(200).send({ id, status });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/Insert", async function (req, res) {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.beginTransaction();
        const { name, address, hours, ImageURL, cuisine, status, ownerID } = req.body;
        const sqlQuery = `
        INSERT INTO restaurant (name, address, hours, ImageURL, cuisine, status) 
        VALUES (?, ?, ?, ?, ?, ?);
                
        SET @Restaurant_id = LAST_INSERT_ID();
      
        UPDATE restaurant_admin SET restaurant_id = @Restaurant_id WHERE id = ?;
        `;

        const result = await conn.query(sqlQuery, [
            name,
            address,
            hours,
            ImageURL,
            cuisine,
            status,
            ownerID
        ]);

        await conn.commit();
        res.status(200).send("Restaurant Added");
    } catch (error) {
        res.status(400).send(error);
        conn.rollback();
    }
});