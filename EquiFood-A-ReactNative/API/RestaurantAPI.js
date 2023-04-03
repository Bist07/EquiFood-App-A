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
        const response = await axios.get(`${config.local.url}:${config.local.port}/Restaurant/Requests/Pending`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const UpdateRequest = async (id, status) => {
    try {
        const response = await axios.put(`${config.local.url}:${config.local.port}/Restaurant//Requests/Update`, { id, status });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

