const express = require('express');
const dotenv = require('dotenv'); //had .config() //might need to provide path to env file

dotenv.config({path: '.env'});

const app = express();
 
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
    response.status(200).send("Hello world")
})
//creates connection router for Restaurant table
const restaurantRouter = require('./routes/Restaurant');
app.use('/Restaurant', restaurantRouter);

//crteates connection router for user table
const userRouter = require('./routes/Users');
app.use('/Users', userRouter);


/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});