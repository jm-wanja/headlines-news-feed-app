import { EventEmitter } from 'events'; // allows store to listen and broadcast events
import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const CHANGE_EVENT = 'change';

/**
 * @class ArticleStore
 * @extends {EventEmitter}
 */
class ArticleStore extends EventEmitter {
  /**
   * Creates an instance of ArticleStore.
   * @memberof ArticleStore
   */
  constructor() {
    super();
    /**
     * Instantiate the needed parameters
     */
    this.articles = [];
    this.articlesSource = '';
    this.articlesSortBy = '';
  }

  /**
   * @returns {object} returns list of news articles
   */
  getAll() {
    return this.articles;
  }
  /**
   * @returns {object} returns list of news sources
   */
  getSourceValue() {
    return this.articlesSource;
  }
  /**
   * @returns {object} returns list of articles sortbys
   */
  getSourceSortBy() {
    return this.articlesSortBy;
  }
  /**
   * @returns {*} listens for change and emits the data to the view
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} add change listener
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * @callback request Callback
   * @param {callback} callback - the callback that handles event changes
   * @returns {object} remove change listener
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const ArticlesStore = new ArticleStore();

/**
 * @description Method to register with dispatcher
*/
AppDispatcher.register((payload) => { // registered a callback - store is now listening to Appdispatcher broadcasts
  switch (payload.actionType) { // determines whether for  given broadcast if there are any relevant actions to take
    case ActionTypes.GET_NEWS_ARTICLES: // actions can now be handled according to their action type
      ArticlesStore.articles = [...payload.data.articles]; // spread operator will deconstruct the array and pass each article separately
      ArticlesStore.articlesSource = payload.data.source;
      ArticlesStore.articlesSortBy = payload.data.sortBy;
      ArticlesStore.emitChange();
      break;
    default:
      break;
  }
});

export default ArticlesStore;
