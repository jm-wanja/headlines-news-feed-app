import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main.jsx';
// import ArticlesPanel from './components/ArticlesPanel.jsx';
import Login from './components/Login.jsx';
// import Logout from './components/Logout';
// import user from './components/UserDetails';

/**
 * Check if the user is logged in
 * @param {string} nextState the next state to load
 * @param {string} replace the page to replace
 * @return {boolean} the login status
 */
// function requireAuth(nextState, replace) {
//   if (!user.isLogin) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname },
//     });
//   }
// }

/**
 * Render the Routes of the News Page
 * @return {Page} the routes of the page
 */
ReactDOM.render(
  <div>
    <Router>
      <div>
         {/* <Route path="/" component={Main} onEnter={requireAuth}/>*/}
         {
           !localStorage.getItem('id_token') ? <Route path="/" component={Login} /> : <Route path="/" component={Main} />
         }
          {/* <Route path="/" component={Login} />
           <Route path="/" component={Main} />
         <Route path="/logout" component={Logout} />*/}
      </div>
    </Router>
  </div>,
  document.getElementById('app')
);
