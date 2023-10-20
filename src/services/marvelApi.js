import axios from 'axios';

import md5 from 'crypto-js/md5';

import { filterComics } from '../utils/comicsUtils';

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUB_API_KEY = '48ebe0951ada15f852c3d0c54f24e59b';
const PRIVATE_API_KEY = '89546092d3b7da73668ce168ea4dd77bc9281539';

const generateHash = (timestamp, PRIVATE_API_KEY, PUB_API_KEY) => {
  return md5(`${timestamp}${PRIVATE_API_KEY}${PUB_API_KEY}`);
};

export const getComics = async () => {
  try {
    const timestamp = new Date().getTime();
    const hash = generateHash(timestamp, PRIVATE_API_KEY, PUB_API_KEY);

    const params = {
      ts: timestamp,
      apikey: PUB_API_KEY,
      hash,
      limit: 50,
      titleStartsWith: 'Spider',
    };

    const response = await axios.get(`${BASE_URL}/comics`, { params });

    const comicsData = response.data.data.results;
    const filteredComics = filterComics(comicsData);

    return filteredComics;
  } catch (error) {
    console.error('Ошибка при запросе комиксов:', error);
    throw error;
  }
};

export default getComics;
