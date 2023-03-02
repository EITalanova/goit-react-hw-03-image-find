export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '33345344-6416458ee2baf9633eccc50a4',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: 1,
  });



// const fetchPictures = searchQuery => {
//   const key = '33345344-6416458ee2baf9633eccc50a4';
//   const imageType = 'photo';
//   const orientation = 'horizontal';
//   const page = 1;
//   const perPage = 12;

//   return fetch(
//     `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=${imageType}&orientation=${orientation}&per_page=${perPage}`
//   ).then(respons => {
//     if (respons.ok) {
//       return respons.json();
//     }
//     return Promise.reject(new Error('No such images found :('));
//   });
// };

// const api = {
//   fetchPictures,
// };

// export default api;
