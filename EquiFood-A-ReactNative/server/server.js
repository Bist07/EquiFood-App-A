const express = require('express')
const dotenv = require('dotenv').config(); //might need to provide path to env file

const app = express()

/**
 * Middleware
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/**
 * Routes
 */

//getting all
app.get('/', (request, response) => {
    response.status(200).send("goo goo ga ga")
})

const foodRouter = require('../Routes/Food');
app.use('/food', foodRouter);


/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});