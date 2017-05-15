import React from 'react';
import History from 'history/createBrowserHistory';
import user from './UserDetails.js';

const history = History({
  forceRefresh: true,
});

/**
 * Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends React.Component {
        /**
     * Log the user out when visited
     * @return {null} redirects user to login page
     */
  componentWillMount() {
    this.history = history;
    if (user.isLogin) {
      user.logOut();
      history.push('/#/login'); // redirect to login page without refresh
      global.window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}

export default Logout;
