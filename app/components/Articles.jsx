import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share.jsx';

/**
 * @param {props} props - the state properties from the parent class
 *
 * @return {*} return the Articles component
*/
const Articles = props => (
  <div key={props.data.url}>
    <div className="col s10 m6">
      <div className="card medium hoverable z-depth-5">
        <div className="card-image">
          <a target="_blank" href={props.data.url}>
          <img alt={props.data.name} src={props.data.urlToImage} />
          </a>
        </div>
        <div className="card-content">
          <h6>{props.data.title}</h6>
          <div className="col s12 light" />
        </div>
        <div className="card-action">
          {/* social media buttons*/}
          <Share share={props.data.url} title={props.data.title} />
          <a
            className="btn waves-effect waves-light pink"
            target="_blank"
            href={props.data.url}
          >Read more »</a>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Set the PropTypes for Articles
 */
Articles.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Articles;
