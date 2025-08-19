import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=15';

export async function getUsers() {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}