import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { getNewsArticles } from '../actions/AppActions';
import SourcesStore from '../stores/SourcesStore';

/**
 * Class  displaying the Search Form.
 * @extends React.Component
 */
class SourcesPanel extends React.Component {
  /**
   * Returns the value in the Search Field
   * @param {object} props - The properties of the News Sources Class
   */
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '',
      clearable: false,
    };
    this.mapStateToOptions = this.mapStateToOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  /**
   * Method to set the currently selected news source,
   * Method to send request to the App Actions.
   * @param {event} event - the select-box change event
   * @return {*} return the new state and props
   */
  updateSearch(event) {
    const value = event.value;
    this.props.setIsLoading(true);
    this.setState({
      currentValue: value,
      newsSource: `Viewing news from ${event.label}`,
      sourceDescription: event.description,
    });
    // console.log('getNewsArticles', value)
    // then action getnewsarticles is dispatched
    getNewsArticles(value);
    // const sortBy = value.split('?sortBy=');
    // this.props.setSortBy(sortBy);
  }

  /**
   * Method to generate the options for the Search box.
   * @param {sources} sources - an array of all the news sources
   * @return {object} return each news source
   */
  mapStateToOptions(sources) { // function that returns an object with options for my form = all sources
    this.sourcesMap = sources;
    return sources.map(source => {
      return {
        value: `${source.id}`,
        label: source.name,
        description: source.description,
      }
    });
  }

  /**
   * Renders the Search Input
   * @return {*} render the Search Form
   */
  render() {

    // const sourcesComp = this.props.sources.map(source =>
    //   <Sources key={source.id} data={source} />
    // )

    return (

      <div className="">
        <div className="section no-pad-bot">
          <div className="container">
            <h4 className="header center pink-text">Know what's happening now</h4>
            <div className="row center">
              <h5 className="header col s12 light">
                Search through our current set of about 70 news sources!!!
              </h5>
            </div>
            <div className="row center valign-wrapper">
              <div className="search-box col s12 m6 offset-m3">
                <Select
                  name="form-field-name"
                  options={this.mapStateToOptions(this.props.sources)}
                  value={this.state.currentValue}
                  className="search-bar"
                  onChange={this.updateSearch} // on change handler 
                  autofocus
                  clearable={this.state.clearable}
                  placeholder="Select News Source" // displayed when there's no value
                />
              </div>
            </div>
            <h5 className="center">{this.state.newsSource}</h5>
            <p className="center light"> {this.state.sourceDescription}</p>
          </div>
        </div>
        {/*<div> It should render here </div>
        <DefaultPage sources={this.props.sources} />*/}
      </div>
    );
  }
}

/**
 * Set the PropTypes for Sources Panel
 */
SourcesPanel.propTypes = {
  sources: PropTypes.array.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func,
};

export default SourcesPanel;
