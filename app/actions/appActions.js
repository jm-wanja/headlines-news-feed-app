import * as api from '../utils/api';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

  /**
   * function to fetch news sources from the newsapi.
   * @returns {*} - object containing the list of news sources via dispatcher
   */
export function getNewsSources() {
  api.getNewsSources((data) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.GET_NEWS_SOURCES,
      data,
    });
  });
}

  /**
   * function to fetch news articles an handle sorting.
   * @param {source}source - the news source of the articles
   * @param {option} option - the sort bys that are available
   * @returns {*} - object containing the list of articles via dispatcher
   */
export function getNewsArticles(source, option) {
  api.getNewsArticles(source, option, (data) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.GET_NEWS_ARTICLES,
      data,
    });
  });
}
