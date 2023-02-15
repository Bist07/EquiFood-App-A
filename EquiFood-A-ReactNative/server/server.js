const express = require('express');
const dotenv = require('dotenv'); //had .config() //might need to provide path to env file

dotenv.config({ path: '.env' });

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

//creates connection router for user table
const customerRouter = require('./routes/customer');
app.use('/customer', customerRouter);


//creates connection router for menu_item table
const menuRouter = require('./routes/Menu');
app.use('/Menu', menuRouter);

//creates connection router for admin table
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);

//creates connection router for restaurant_admin table
const resadminRouter = require('./routes/resadmin');
app.use('/admin', resadminRouter);


/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});