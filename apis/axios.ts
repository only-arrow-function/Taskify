import axios from 'axios';
import getToken from './cookie';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/4-3/',
});

export default instance;
