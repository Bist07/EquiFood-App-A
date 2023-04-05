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


router.post('/register', async function (req, res) {
    try {
        // const {id, address, hours, cuisine, rating, img_id, longitude, latitude, name, Img} = req.body;
        const { first_name, last_name, email, passwordHash } = req.body;
        const sqlQuery = "INSERT INTO customer (first_name, last_name, email, passwordHash) VALUES (?,?,?,?)";
        const result = await pool.query(sqlQuery, [first_name, last_name, email, passwordHash]);

        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Registered!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/login', async function (req, res) {
    try {
        const { email, enteredPassword } = req.body; //change to email in future
        const sqlGetUser = 'SELECT passwordHash, first_name, id FROM customer WHERE email = ?';
        const rows = await pool.query(sqlGetUser, [email]); //pulls user id


        if (rows) {




            var isValid = false;
            //compares hash in database to entered password
            if (bcrypt.compareSync(enteredPassword, rows[0].passwordHash)) {
                isValid = true;
            };
            console.log(rows[0].passwordHash)
            console.log(rows[0].passwordHash)
            console.log(enteredPassword)
            console.log(isValid)
            console.log(rows[0].id);
            //returning appropriate values
            res.status(200).json({ PasswordGood: isValid, idnum: rows[0].id, name: rows[0].first_name })

        }
        res.status(200).send() //also need to change to email in future

    } catch (error) {
        res.status(400).send(error.message)
    }

});



router.post('/EditUsername', async function (req, res) {
    try {
        const {  NewUserName, idnum } = req.body;
        const sqlQuery = "UPDATE customer SET first_name = ? WHERE id = ?";
        const result = await pool.query(sqlQuery, [NewUserName, idnum]);
        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Username updated!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/ChangePassword', async function (req, res) {
    try {
        const {  NewPassword, idnum } = req.body;
        const sqlQuery = "UPDATE customer SET passwordHash = ? WHERE id = ?";
        const result = await pool.query(sqlQuery, [NewPassword, idnum]);
        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Username updated!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/DeleteAccount', async function (req, res) {
    try {
        const { idnum } = req.body;
        const sqlQuery = "DELETE FROM customer WHERE id = ?";
        const result = await pool.query(sqlQuery, [idnum]);
        console.log(result);
        console.log(sqlQuery);
        res.status(200).send("Account Deleted!")
    } catch (error) {
        res.status(400).send(error.message)
    }
});


