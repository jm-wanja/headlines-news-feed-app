import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderPanel.jsx';
import Footer from './Footer.jsx';

/**
 * Class to display the share component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} return the main component.
 */
const Main = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

/**
 * Set the PropTypes for Main component
 */
Main.propTypes = {
  children: PropTypes.element,
};

export default Main;
