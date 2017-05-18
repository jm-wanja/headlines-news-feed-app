import React from 'react';
import PropTypes from 'prop-types';
import Sources from './Sources.jsx';

/**
 * Class to display the sources component.
 * @extends React.Component
 * @param {*} props - the parent component state values
 * @return {jsx} returns the sources component
 */
// dummy function
const DefaultPage = (props) => {
  const sources = props.sources.map(source =>
    <Sources key={source.id} data={source} />,
  );

  return (
    <div className="container">
      <div className="row">
        {sources}
      </div>
    </div>
  );
};

/**
 * Set the PropTypes for the Default page
 */
DefaultPage.propTypes = {
  sources: PropTypes.array,
};

export default DefaultPage;
