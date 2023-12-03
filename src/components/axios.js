import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://messaging-app-backend-yn8b.onrender.com',
});
export default instance;
