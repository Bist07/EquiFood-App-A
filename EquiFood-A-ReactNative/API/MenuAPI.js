import axios from "axios";

export const getMenu = async (restaurant_id) => {
    try {
        const response = await axios.get(`http://192.168.0.36:5001/Menu/${restaurant_id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
