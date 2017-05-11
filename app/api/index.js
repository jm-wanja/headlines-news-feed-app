import axios from 'axios';

const apiURL = 'https://newsapi.org/v1'
const apiKey = '213327409d384371851777e7c7f78dfe'

export function getArticles(source) {
    return axios.get(`${apiURL}/articles?source=${source}&sortBy=latest&apiKey=${apiKey}`)
        .then(response => response.data.articles)
        .catch(error => error.data);
}