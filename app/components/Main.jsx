import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderPanel.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import DefaultPage from './DefaultPage.jsx';
import Sources from './Sources.jsx';
import Share from './SocialMedia.jsx';
import ArticlesPanel from './ArticlesPanel.jsx';


/**
 * Class to display the share component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} return the main component.
 */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Share title="Title" share="Share"/>
        <ArticlesPanel sortBy={["top"]}/>
        {/*<DefaultPage sources={[]}/>*/}
        <Footer />
      </div>
    );
  }
}
/*function Main (){
  <div>
    <Header />
    <Footer />
  </div>
}*/

/**
 * Set the PropTypes for Main component
 */
// Main.propTypes = {
//   children: PropTypes.element,
// };

export default Main;
