import express from "express";
import { pool } from '../helpers/database.js'
export const router = express.Router()
import bcrypt from 'bcryptjs'
import isaac from "isaac";

//fallback for hash api
bcrypt.setRandomFallback((len) => {
    const buf = new Uint8Array(len);

    return buf.map(() => Math.floor(isaac.random() * 256));
});

//function to register new account
router.post('/register', async function (req, res) {
    try {

        const { first_name, last_name, email, passwordHash } = req.body;
        const sqlQuery = "INSERT INTO restaurant_admin (first_name, last_name, email, passwordHash) VALUES (?,?,?,?)";
        const result = await pool.query(sqlQuery, [first_name, last_name, email, passwordHash]);

        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Registered!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//function to login to existing account
router.post('/login', async function (req, res) {
    try {
        const { email, enteredRestaurantOwnerPassword } = req.body; //change to email in future
        const sqlGetUser = 'SELECT passwordHash, id, first_name, restaurant_id FROM restaurant_admin WHERE email = ?';
        const rows = await pool.query(sqlGetUser, [email]); //pulls user id
        if (rows) {
            var isValid = false;
            if (bcrypt.compareSync(enteredRestaurantOwnerPassword, rows[0].passwordHash)) {
                isValid = true;
            };

            console.log(rows[0].passwordHash)
            console.log(enteredRestaurantOwnerPassword)
            console.log(isValid)

            res.status(200).json({ PasswordGood: isValid, idnum: rows[0].id, name: rows[0].first_name, restaurantId: rows[0].restaurant_id })
        }
        res.status(200).send() //also need to change to email in future

    } catch (error) {
        res.status(400).send(error.message)
    }

});

router.put('/updateRestaurantId', async function (req, res) {
    try {
        const { restaurant_id } = req.body;
        const sqlQuery = "UPDATE restaurant_admin SET restaurant_id = ? WHERE id = ?";
        const result = await pool.query(sqlQuery, [status, id]);
        res.status(200).send(restaurant_id);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

