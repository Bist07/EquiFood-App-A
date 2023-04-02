import express from "express";
import { pool } from '../helpers/database.js'
export const router = express.Router()

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

// Insert Restaurant
router.post('/Insert', async function (req, res) {
    try {
        const { name, address, hours, ImageURL, cuisine, status } = req.body;
        const sqlQuery = "INSERT INTO restaurant (name, address, hours, ImageURL, cuisine, status) VALUES (?,?,?,?,?)";
        const result = await pool.query(sqlQuery, [name, address, hours, ImageURL, cuisine, status]);
        res.status(200).send("Restaurant Added");
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/delete', async function (req, res) {
    try {
        const { id } = req.body;
        const sqlQuery = "DELETE FROM restaurant WHERE id = '" + id + "'";
        const result = await pool.query(sqlQuery, [id]);
        res.status(200).send("Restaurant Added");
    } catch (error) {
        res.status(400).send(error.message);
    }
})