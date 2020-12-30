import axios from '../../../services/axios';

export const getAllCharacters = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`characters?limit=10&offset=0`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

export const getMoreCharacters = (limit, offset) =>
  new Promise((resolve, reject) => {
    const mountUrl = `limit=${limit ? limit : 10}&offset=${
      offset ? offset : 0
    }`;
    axios
      .get(`characters?${mountUrl}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });

export const getNameCharacters = (name) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`characters?name=${name}`)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
