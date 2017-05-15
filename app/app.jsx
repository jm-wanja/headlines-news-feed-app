import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import ArticlesPanel from './components/ArticlesPanel.jsx';
import Login from './components/LoginPage';
import Logout from './components/Logout';
import user from './components/UserDetails';

/**
 * Check if the user is logged in
 * @param {string} nextState the next state to load
 * @param {string} replace the page to replace
 * @return {boolean} the login status
 */
function requireAuth(nextState, replace) {
  if (!user.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

const app = document.getElementById('app');

/**
 * Render the Routes of the News Page
 * @return {Page} the routes of the page
 */
ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main} onEnter={requireAuth}>
        <IndexRoute component={Home} />
        <Route path="articlespanel" component={ArticlesPanel} />
      </Route>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
    </Router>
  </div>,
  app,
);
