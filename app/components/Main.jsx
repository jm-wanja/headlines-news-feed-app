import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';


/**
 * Class to display the main component.
 * @extends React.Component
 */
class Main extends React.Component {
  /**
   * Display the Main Component
   * @return {jsx} render the Main page
   */
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Main;
