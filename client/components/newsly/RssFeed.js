import React from 'react';
import SourcesPanel from './SourcesPanel.js';
import ArticlesPanel from './ArticlesPanel.js';
import SortPanel from './SortPanel.js';
import GooglePlusLogin from './LoginButton.js';
import HeaderPanel from './HeaderPanel.js'


export default class RssFeed extends React.Component {
    render() {
        return (
            <div className='rssFeed'>
                <div className='headerPanel'>
                    <HeaderPanel />
                </div>
                <div className='sourcesPanel'>
                    <SourcesPanel />
                </div>
                <div className='articlesPanel'>
                    <ArticlesPanel />
                </div>
                <div className='sortPanel'>
                    <SortPanel />
                </div>
                <div className='loginButton'>
                    <GooglePlusLogin />
                </div>
            </div>
        );
    }
}