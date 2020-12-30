import axios from '../../../services/axios';

export const getQuotesProfiler = (author) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`quote?author=${author}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
