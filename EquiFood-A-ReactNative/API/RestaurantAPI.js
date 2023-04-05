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

export const getOrderedRestaurants = async () => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Restaurant/OrderedRestaurants`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getOrderedByRatingRestaurants = async () => {
    try {
        const response = await axios.get(`${config.local.url}:${config.local.port}/Restaurant/RatingRestaurants`);
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
        const response = await axios.put(`${config.local.url}:${config.local.port}/Restaurant/Update`, { id, status });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const InsertRestaurant = async (data) => {
    axios({
        url: `${config.local.url}:${config.local.port}/Restaurant/Insert`,
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(
        alert("Restaurant added.")
    ).catch((error) => {
        console.log(error);
        alert("An error has occurred when inserting restaurant.");
    });
}
