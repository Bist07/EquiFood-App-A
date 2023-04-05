import axios from "axios";
import config from "../config"

export const getOrders = async (restaurant_id) => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Orders/${restaurant_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getOrderDetails = async (food_order_id) => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Orders/OrderDetails/${food_order_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateOrderStatus = async (id, status) => {
    try {
        const response = await axios.put(`${config.local.url}:${config.local.port}/Orders/UpdateStatus`, {id, status});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const completeOrder = async (id, status) => {
    try {
        const response = await axios.put(`${config.local.url}:${config.local.port}/Orders/CompleteOrder`, {id, status});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const insertFoodOrder = async (customer_id, restaurant_id, total_amount, reservation_datetime, discount, menuItems) => {
    try {
        const response = await axios.post(`${config.local.url}:${config.local.port}/Orders/OrderInsert`, {customer_id, restaurant_id, total_amount, reservation_datetime, discount, menuItems});
        return response.data;
    } catch (error){
        console.error(error);
    }
}

export const insertOrderMenuItem = async (menuItems) => {
    try {
        const response = await axios.post(`${config.local.url}:${config.local.port}/Orders/InsertOrderMenuItem`, {menuItems});
        return response.data;
    } catch (error){
        console.error(error);
    }
}