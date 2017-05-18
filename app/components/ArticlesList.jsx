import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

/**
 * @param {props} props - the parent state properties
 * @return {*} return the ArticlesList component
*/

const options = [
  { value: 'top', label: 'Top' },
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
];

const ArticlesList = props => (
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col s12 m9">
          {props.articles}
        </div>
        <div className="col s12 m3 light">
          <Select
            name="sort-by"
            options={options}
            value={props.currentSortValue}
            onChange={props.updateSearch}
            placeholder="Sort News By"
            clearable={props.clearable}
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
ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  sortOptions: PropTypes.array.isRequired,
  currentSortValue: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
  clearable: PropTypes.bool,
};

export default ArticlesList;
