// Create an Axios instance with a base URL for API requests
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default instance;
