import axios from 'axios';

const imagesFetch = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '31833677-37f850fc83a2da04e94b97183';
  
  const url = `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default imagesFetch;
