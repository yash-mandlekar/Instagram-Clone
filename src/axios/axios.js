import axios from 'axios';

const Axios = axios.create({
    baseURL: `http://localhost:3080/api`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default Axios;
