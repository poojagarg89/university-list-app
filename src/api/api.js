import axios from 'axios';

const baseURL = `http://universities.hipolabs.com/`;

const getUniversityDetails = () => {
  const URL = `${baseURL}/search`;
  return axios.get(URL);
};

export default {
  getUniversityDetails,
};
