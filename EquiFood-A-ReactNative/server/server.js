import express from "express";
import { router as restaurantRouter } from './routes/Restaurant.js'
import { router as customerRouter } from './routes/customer.js'
import { router as menuRouter } from './routes/Menu.js'
import { router as ordersRouter } from './routes/Orders.js'
import { router as imageRouter } from './routes/Image.js'
import dotenv from 'dotenv' //had .config() //might need to provide path to env file

dotenv.config({ path: '.env' });

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

app.get('/', (request, response) => {
    response.status(200).send("Hello world")
})

//creates connection router for Restaurant table
app.use('/Restaurant', restaurantRouter);

//creates connection router for Customer table
app.use('/customer', customerRouter);

//creates connection router for Menu table
app.use('/Menu', menuRouter);

//creates connection router for Orders table
app.use('/Orders', ordersRouter);

//creates connection router for Orders table
app.use('/Images', imageRouter);

/**
 * Start listening
 */
app.listen(process.env.DB_PORT, () => {
    console.log(`Server Started`);
});
