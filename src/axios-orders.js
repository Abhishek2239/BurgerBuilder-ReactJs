import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f4b50.firebaseio.com/'
});

export default instance;