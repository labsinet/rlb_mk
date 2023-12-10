import axios from "axios";
import config from '../config/config.js';

const BASE_URL = config.apiUrl;

export async function getBooks() {

    
  const response = await axios.get(`${BASE_URL}/books`);
 //console.log(BASE_URL);
  return response.data;
}