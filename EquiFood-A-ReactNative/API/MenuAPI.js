import axios from "axios";
import config from "../config"

export const getMenu = async (restaurant_id) => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Menu/${restaurant_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getFoodItem = async (menu_item_id) => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Menu/${menu_item_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const FoodInsert = async (data) => {
    axios({
        url: `${config.local.url}:${config.local.port}/Menu/FoodInsert`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(
        alert("Food has been inserted into your restaurant.")
    ).catch((error) => {
        console.log(error);
        alert("An error has occurred when inserting food.");
    });
}