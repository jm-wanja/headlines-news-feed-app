import keyMirror from 'key-mirror';

/**
 * Define action constants
*/
const ActionTypes = keyMirror({
  GET_NEWS_ARTICLES: null,   // Get the News Articles
  GET_NEWS_SOURCES: null,    // Get the News Sources
});

export default ActionTypes;
