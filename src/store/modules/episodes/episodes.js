import axios from '../../../services/axios';

export const getEpisodes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`episodes`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
