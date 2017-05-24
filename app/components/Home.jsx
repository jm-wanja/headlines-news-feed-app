import React from 'react';
import SourcesStore from '../stores/SourcesStore';
import SourcesPanel from './SourcesPanel.jsx';
import ArticlesPanel from './ArticlesPanel.jsx';
import { getNewsSources } from '../actions/appActions';
import SourcesCategories from './SourcesCategories.jsx';
import Sources from './Sources.jsx';

/**
 * Class to hold the main component.
 * @extends React.Component
 */
class Home extends React.Component {
  /**
   * Set the Initial conditions for Home component
   * @param {*} props - The properties of the Home Class
   */
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      sortBy: [],
      isLoading: false,
      welcome: true,
      currentFilterValue: '',
      clearable: false,
    };

    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.unsetWelcome = this.unsetWelcome.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.getNewFilterValue = this.updateSearch.bind(this);
    this.getNewFilterValue = this.getNewFilterValue.bind(this);
  }

  /**
   * Get the initial state from stores
   * @return {*} the current state.
   */
  getInitialState() {
    return this.getItemsState();
  }

  /**
   * Invoked immediately after a component is mounted uses addChangeListener method  from store
   * @return {*} the new state and props
   */
  componentWillMount() {
    SourcesStore.addChangeListener(this.onChange);
    getNewsSources();
  }

  /**
   * The method to set the state of the component when there is a change from SourcesStore
   * @return {*} the new state and props
   */
  onChange() {
    // const itemState = this.getItemsState();
    this.setState({
      sources: this.getItemsState().sources || [],
      isLoading: false,
    });
  }

  /**
   * The method to set the state of the component when there is a change
   * @param {boolean} value - it is either true or false
   * @return {void} returns nothing
   */
  setIsLoading(value) {
    console.log(value);
    this.setState({
      isLoading: value,
    });
  }
  /**
   * The method to unset welcome while loading
   * @param {boolean} value - is false
   * @return {void} returns nothing
   */
  unsetWelcome() {
    this.setState({
      welcome: false,
    });
  }

  /**
   * The method for handling change events
   * @return {object} the list of sources from SourcesStore using action  getAll method
   */
  getItemsState() {
    this.getItemsStateNow = '';
    return ({
      sources: SourcesStore.getAll(),
      currentFilterValue: SourcesStore.getSourceCategory(),
    });
  }

  /**
   * Method to set the currently selected SortBy status
   * @param {string} sortBy sets the sortBy
   * @return {void} sets the current sort by state
   */
  setSortBy(sortBy) {
    this.setState({
      sortBy,
    });
  }

    /**
   * Method to set the current Sort value and send request to the App Actions.
   * @param {event} event the change event
   * @returns {*} return the is loading props.
   */
  updateSearch(event) {
    const category = event.value;
    const urlString = `${SourcesStore.getSourceCategory()}&category=${category}`;
    getNewsSources(urlString);
    this.setState({ currentFilterValue: category });
    this.setIsLoading(true);
  }

  /**
  * Invoked immediately when a component is unmounted
  * @returns {*} returns the new state and props.
  */
  componentWillUnMount() {
    SourcesStore.removeChangeListener(this.onChange);
  }

  /**
   * Method to display the main (parent) component.
   * @return {jsx} render the News Content
   */
  render() {
    const options = [
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'general', label: 'General' },
    { value: 'music', label: 'Music' },
    { value: 'politics', label: 'Politics' },
    { value: 'science_and_nature', label: 'Science_and_nature' },
    { value: 'sport', label: 'Sport' },
    { value: 'technology', label: 'Technology' }
    ];
    return (
      <div className="main-component">
        <div className="row">
          <div className="col s8">
          <SourcesPanel // view sources
            sources={this.state.sources}
            setSortBy={this.setSortBy}
            loading={this.state.isLoading}
            setIsLoading={this.setIsLoading}
          />
          </div>
          <div className="col s4">
          <SourcesCategories
            options={options}
            clearable={this.state.clearable}
            currentFilterValue={this.state.currentFilterValue}
            updateSearch={this.updateSearch}
          />
          </div>
        </div>
        <ArticlesPanel // view articles
          sources={this.state.sources}
          sortBy={this.state.sortBy}
          isLoading={this.state.isLoading}
          setIsLoading={this.setIsLoading}
          welcome={this.state.welcome}
          unsetWelcome={this.unsetWelcome}
        />
      </div>
    );
  }
}

export default Home;

