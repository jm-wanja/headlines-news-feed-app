import React from 'react';
import SourcesPanel from './SourcesPanel';
import ArticlesPanel from './ArticlesPanel';
import SortPanel from './SortPanel';
import Login from './LoginPage';
import HeaderPanel from './HeaderPanel';
import { Layout, Drawer, Navigation, Header, Textfield } from 'react-mdl';


export default class RssFeed extends React.Component {
    render() {
        return (
            <div className='rssFeed' >
                {/* <div className='headerPanel'>
                    <HeaderPanel />
                </div>
                <div className='sourcesPanel'>
                    <SourcesPanel />
                </div>
                <div className='articlesPanel'>
                </div>
                <div className='sortPanel'>
                    <SortPanel />
                </div>
                <div className='loginButton'>
                    <GooglePlusLogin />
                </div>*/}
                {/* <Layout fixedHeader fixedDrawer>
                    <HeaderPanel />
                    <SourcesPanel />
                    <ArticlesPanel />
                </Layout>*/}

                <div>
                    <Layout fixedHeader fixedDrawer>
                        <HeaderPanel />

                        <SourcesPanel />
                        <SortPanel />
                        <ArticlesPanel />
                    </Layout>
                </div>

            </div>
        );
    }
}
