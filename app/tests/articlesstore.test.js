import expect from 'expect';
import ArticlesStore from './../stores/ArticlesStore';
import Dispatcher from './../dispatchers/AppDispatcher';
import ActionTypes from './../constants/ActionTypes.jsx';
import { fetchedArticles } from './testdata.jsx';

describe('Application Article store', () => {
  const articles = [];

  it('should exists', () => {
    expect(ArticlesStore).toExist();
  });

  it('should instantiate correctly', () => {
    expect(typeof ArticlesStore).toBe('object');
  });

  it('should instantiate correctly', () => {
    expect(typeof ArticlesStore.articles).toBe('object');
  });

  it('should have an emit change listener method', () => {
    expect(ArticlesStore.emitChange).toExist();
  });

  it('should have an emit change listener that is a function', () => {
    expect(typeof ArticlesStore.emitChange).toBe('function');
  });

  it('should have a change listener method', () => {
    expect(ArticlesStore.addChangeListener).toExist();
  });

  it('should have a change listener that is a function', () => {
    expect(typeof ArticlesStore.addChangeListener).toBe('function');
  });

  it('should have a remove change listener method', () => {
    expect(ArticlesStore.removeChangeListener).toExist();
  });

  it('should have a remove change listener that is a function', () => {
    expect(typeof ArticlesStore.removeChangeListener).toBe('function');
  });

  it('should receive articles from Dispatcher', () => {
    const actual = ArticlesStore.getAll();
    const expected = articles;
    expect(actual).toEqual(expected);
  });

  it('should be initialized as an empty array', () => {
    const actual = ArticlesStore.articles;
    expect(actual).toEqual([]);
  });

  it('should receive some fetched articles from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.GET_NEWS_ARTICLES,
      data: fetchedArticles,
    });
    const actual = ArticlesStore.getAll();
    const expected = fetchedArticles.articles;
    expect(actual).toEqual(expected);
  });

  // it('should return empty array when an invalid article is searched', () => {
  //   Dispatcher.dispatch({
  //     actionType: ActionTypes.GET_NEWS_ARTICLES,
  //     data: ''
  //   });
  //   const actual = ArticlesStore.getAll();
  //   const expected = [];
  //   expect(actual).toEqual(expected);
  // });

  it('should have an emit function', () => {
    expect(typeof ArticlesStore.emit).toBe('function');
  });

  it('should have an on function', () => {
    expect(typeof ArticlesStore.on).toBe('function');
  });

  it('should have a remove Change Listener function', () => {
    expect(typeof ArticlesStore.removeChangeListener).toBe('function');
  });
});
