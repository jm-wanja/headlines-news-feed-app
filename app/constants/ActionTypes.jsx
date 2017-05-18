import keyMirror from 'key-mirror'; // mirror keys so that value matches our key defination

/**
 * Define action constants
*/
const ActionTypes = keyMirror({
  GET_NEWS_ARTICLES: null,   // Get the News Articles
  GET_NEWS_SOURCES: null,    // Get the News Sources
});

export default ActionTypes;
