import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const CHANGE_EVENT = 'change';

/**
 * @class SourceStore
 *
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   *
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
    this.currentSource = '';
    this.sourceCategory = '';
  }

  /**
   * @returns {object} returns list of news sources
   */
  getAll() {
    return this.sources;
  }

  /**
 * @returns {object} returns list of source categories
 */
  getSourceCategory() {
    return this.sourceCategory;
  }

  /**
   * @returns {*} listens for change and emits the data to Home
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @callback request Callback
   *
   * @param {callback} callback - the callback that handles event changes
   *
   * @returns {object} add change listener
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @callback request Callback
   *
   * @param {callback} callback - the callback that handles event changes
   *
   * @returns {object} remove change listener
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const SourcesStore = new SourceStore();

/**
 * @description Method to register with dispatcher
*/
AppDispatcher.register((payloads) => {
  switch (payloads.actionType) {
    case ActionTypes.GET_NEWS_SOURCES:
      SourcesStore.sources = [...payloads.data];
      SourcesStore.sourceCategory = payloads.data.category;
      SourcesStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SourcesStore;
