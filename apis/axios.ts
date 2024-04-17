import axios from 'axios';

const instance = axios.create({
  baseURL: "https://openmind-api.vercel.app/4-3/",
})

export default instance;