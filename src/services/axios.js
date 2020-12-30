/** config axios */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
