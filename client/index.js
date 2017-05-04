/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import RssFeed from './components/headlinesJs/RssFeed.js';

ReactDOM.render(<RssFeed />, document.getElementById('root'));
