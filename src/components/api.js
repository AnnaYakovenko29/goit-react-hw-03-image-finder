import axios from 'axios';

const searchParams = new URLSearchParams({
    key: '29796536-5ed99ce8effe96d6d69c656a8',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  
  export const addImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  return response.data;
};