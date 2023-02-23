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
