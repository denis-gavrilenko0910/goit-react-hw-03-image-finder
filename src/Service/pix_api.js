import axios from 'axios';

const API_KEY = '37039917-22e1763e7ef3d2d24e9b398b5';

export const fetchPixabayImages = (searchQuery, currentPage) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};
