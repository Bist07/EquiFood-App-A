import axios from "axios";

export const getRestaurants = async () => {
    try {
        const response = await axios.get('http://192.168.0.36:5001/Restaurant');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};