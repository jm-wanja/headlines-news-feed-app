import * as api from '../utils/api';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

export function getNewsSources() {
  api.getNewsSources((data) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.GET_NEWS_SOURCES,
      data,
    });
  });
}

export function getNewsArticles(source, option) {
  api.getNewsArticles(source, option, (data) => {
    AppDispatcher.dispatch({
      actionType: ActionTypes.GET_NEWS_ARTICLES,
      data,
    });
  });
}
