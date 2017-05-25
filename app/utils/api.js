import axios from 'axios';

const apiUrl = 'https://newsapi.org/v1/';
const apiKey = '213327409d384371851777e7c7f78dfe';

  /**
   * class to fetch news articles and handle sorting.
   *
   * @param {*} source - the news source
   * @param {*} option - the sortBy
   *  @param {*} callback - the callback that handles event changes
   *
   * @returns {*} - object containing the list of articles based on sources
   */
export function getNewsArticles(source, option, callback) {
  const url = `${apiUrl}articles?source=${source}&sortBy=${option || ''}&apiKey=${apiKey}`; // OR operator sets default sortby option to none
  axios.get(url).then(response => callback(response.data))
  .catch(error => error.data);
}


  /**
   * function to fetch news sources from the newsapi.
   *
   * @param {*} callback - the callback that handles event changes
   * @param {*} category - the sources category
   *
   * @returns {*} - object containing the list of news sources
   */
export function getNewsSources(callback, category) {
  const url = `${apiUrl}/sources?${category}&apiKey=${apiKey}`;
  axios.get(url).then(response => callback(response.data.sources))
  .catch(error => error.data);
}

