import axios from "axios";

//Creating a custome axios instance with baseurl
const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export default instance;
