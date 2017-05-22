import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';
import ActionTypes from '../constants/ActionTypes.jsx';

const CHANGE_EVENT = 'change';

// holds state of the data, public methods are used to retrieve data and set the ap state

/**
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
    this.currentSource = '';
  }

  /**
   * @returns {object} returns list of news sources
   */
  getAll() {
    return this.sources;
  }

  /**
   * @returns {*} listens for change and emits the data to Home
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

const SourcesStore = new SourceStore();

/**
 * @description Method to register with dispatcher
*/
AppDispatcher.register((payloads) => { // the store is now listening to AppDispatcher
  switch (payloads.actionType) { // determines whether for a given broadcasts if there's relevant action
    case ActionTypes.GET_NEWS_SOURCES:
    // console.log('getting payload: ', payloads);
      SourcesStore.sources = [...payloads.data];
      SourcesStore.emitChange();
      break;
    default:
      break;
  }
  return true;
});

export default SourcesStore;
