import express from "express";
import { pool } from '../helpers/database.js'
export const router = express.Router()

router.post('/AdminRegister', async function (req, res) {
    try {
        // const {id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img} = req.body;
        const { first_name, last_name, email, passwordHash, company_code } = req.body;
        const sqlQuery = "INSERT INTO admin (first_name, last_name, email, passwordHash, company_code) VALUES (?,?,?,?,?)";
        const result = await pool.query(sqlQuery, [first_name, last_name, email, passwordHash, company_code]);


        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Registered!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/login', async function (req, res) {
    try {
        const { email, enteredAdminPassword } = req.body; //change to email in future
        const sqlGetUser = 'SELECT passwordHash FROM admin WHERE email = ?';
        const rows = await pool.query(sqlGetUser, [email]); //pulls user id


        if (rows) {
            var isValid = false;

            if (enteredAdminPassword == rows[0].passwordHash) {
                isValid = true;

            };

            console.log("DB pass: " + rows[0].passwordHash)
            console.log("enter pass: " + enteredAdminPassword)
            console.log(isValid)
            res.status(200).json({ PasswordGood: isValid })



        }
        res.status(200).send() //also need to change to email in future

    } catch (error) {
        res.status(400).send(error.message)
    }

});

//get restaurants with 'pending' status
router.get('/', async function (req, res) {
    try {
        const sqlQuery = "SELECT * FROM restaurant WHERE status = 'pending'"
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

