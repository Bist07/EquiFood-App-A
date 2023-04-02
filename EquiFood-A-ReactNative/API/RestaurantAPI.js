import axios from "axios";
import config from "../config"

export const getRestaurants = async () => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Restaurant`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getRestaurantsRequest = async () => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Restaurant/Request`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

