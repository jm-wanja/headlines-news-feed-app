import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';


/**
 * Render the Routes of the News Page
 * @return {Page} the routes of the page
 */
ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        </div>


    </Router>,
  document.getElementById('app')
);
