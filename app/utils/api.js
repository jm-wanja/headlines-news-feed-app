// import axios from 'axios';

// const apiURL = 'https://newsapi.org/v1';
// const apiKey = '213327409d384371851777e7c7f78dfe';

// export function getArticles(source) {
//   return axios.get(`${apiURL}/articles?source=${source}&sortBy=latest&apiKey=${apiKey}`)
//         .then(response => response.data.articles)
//         .catch(error => error.data);
// }

import axios from 'axios';

// const baseUrl = 'https://newsapi.org/v1/';
// const apiKey = '213327409d384371851777e7c7f78dfe';

export function getNewsArticles(source, option, callback) {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${option}&apiKey=213327409d384371851777e7c7f78dfe`;
  axios.get(url).then(response => callback(response.data));
}

export function getNewsSources(callback) {
  const url = 'https://newsapi.org/v1/sources';
  axios.get(url).then(response => callback(response.data.sources));
}

