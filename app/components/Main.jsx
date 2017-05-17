import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderPanel.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import DefaultPage from './DefaultPage.jsx';
import Sources from './Sources.jsx';
import Share from './SocialMedia.jsx';
import ArticlesPanel from './ArticlesPanel.jsx';
import Articles from './Articles.jsx';
import Login from './LoginPage';
import Logout from './Logout';
import SourcesPanel from './SourcesPanel.jsx';


/**
 * Class to display the main component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} return the main component.
 */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        {/*{props.children}*/}
        {/*<SourcesPanel />*/}
        {/*<Logout />
        <Articles />
        <Share title="Title" share="Share"/>
        <ArticlesPanel sortBy={["top"]}/>
        <DefaultPage sources={[]}/>*/}
        <Footer />
      </div>
    );
  }
}

/**
 * Set the PropTypes for Main component
 */
// Main.propTypes = {
//   children: PropTypes.element,
// };

export default Main;
