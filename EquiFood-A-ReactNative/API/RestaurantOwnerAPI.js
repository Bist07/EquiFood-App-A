import axios from "axios";
import config from "../config"

export const getRestaurantID = async () => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/RestaurantOwner/id`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

