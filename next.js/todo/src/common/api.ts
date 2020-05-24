//import axios, {Method} from 'axios'
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  xsrfHeaderName: 'X-CSRF-Token',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  responseType: 'json'
})

export default api;
