import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderPanel.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import ArticlesPanel from './ArticlesPanel.jsx';


/**
 * Class to display the share component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} return the main component.
 */
export function Main(props) {
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
}

/**
 * Set the PropTypes for Main component
 */
Main.propTypes = {
  children: PropTypes.element,
};

