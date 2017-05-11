import Dispatcher from '../dispatchers/AppDispatcher';

export function getNewsSources() {
  api.getNewsSources((data) => {
    Dispatcher.dispatch({
      actionType: 'GET_NEWS_SOURCES',
      data,
    });
  });
}

export function getNewsArticles(source, option) {
  api.getNewsArticles(source, option, (data) => {
    Dispatcher.dispatch({
      actionType: 'GET_NEWS_ARTICLES',
      data,
    });
  });
}
