import React from 'react';
import SourcesPanel from './SourcesPanel.js';
import ArticlesPanel from './ArticlesPanel.js';
import FiltersPanel from './FiltersPanel.js';
import GooglePlusLogin from './Loginbutton.js';
import HeaderPanel from './HeaderPanel.js'


export default class RssFeed extends React.Component {
    render() {
        return (
            <div className = 'rssFeed'>
                <div className='sourcesPanel'>
                    <SourcesPanel />
                </div>
                <div className='articlesPanel'>
                    <ArticlesPanel />
                </div>
                <div className='filtersPanel'>
                    <FiltersPanel />
                </div>
                <div className='loginButton'>
                    <GooglePlusLogin />
                </div>
                <div classname='headerPanel'>
                    <HeaderPanel />
                </div>
            </div>
        );
    }
}