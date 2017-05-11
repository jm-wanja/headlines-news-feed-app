/*
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import RssFeed from './components/newsly/RssFeed.js';

ReactDOM.render(<RssFeed />, document.getElementById('root'));
