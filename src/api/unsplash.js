import axios from 'axios';
import { REACT_APP_API_KEY } from '../config';

const api = process.env.REACT_APP_API_KEY;
console.log(api);
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${REACT_APP_API_KEY}`,
  }
});