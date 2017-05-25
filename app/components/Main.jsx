import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';


/**
 * @param {*} div - returns the children components
 *
 * @return {*} render the footer component
*/
function Main(div) {
  return (
      <div>
        <Header />
         <Home />
        <Footer />
      </div>
  );
}

export default Main;
