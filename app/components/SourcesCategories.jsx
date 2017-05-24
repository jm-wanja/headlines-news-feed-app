import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

/**
 * @param {props} props - the parent state properties
 * @return {*} return the Filters component
*/



const SourcesCategories = props => (
  <div className="section">
    <div className="container">
      <div className="row">
        <div>
          <Select
            name="categories"
            options={props.options}
            value={props.currentFilterValue}
            onChange={props.updateSearch}
            placeholder="Sources Categories"
            clearable={props.clearable}
            style={{ marginTop: '170px' }}
          />
        </div>
        <div className="divider" />
      </div>
    </div>
  </div>
);

/**
 * Set the PropTypes for ArticlesList
 */
SourcesCategories.propTypes = {
  options: PropTypes.array.isRequired,
  currentFilterValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  clearable: PropTypes.bool,
};

export default SourcesCategories;
