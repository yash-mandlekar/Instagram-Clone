import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || `http://localhost:3080/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
