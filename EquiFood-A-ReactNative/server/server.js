const express = require('express');
const dotenv = require('dotenv'); //had .config() //might need to provide path to env file

dotenv.config({ path: '.env' });

var ip_address = "";

const app = express();

function json(url) {
    return fetch(url).then(res => res.json());
}


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

//connection router for user table
const menuRouter = require('./routes/Menu');
app.use('/Menu', menuRouter);

//creates connection router for Orders table
const ordersRouter = require('./routes/Orders');
app.use('/Orders', ordersRouter);

//creates connection router for admin table
const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter);


/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});