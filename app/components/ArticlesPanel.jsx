import React from 'react';
import PropTypes from 'prop-types';
import ArticlesStore from '../stores/ArticlesStore';
import { getNewsArticles } from '../actions/AppActions';
import ArticlesList from './ArticlesList.jsx';
import Articles from './Articles.jsx';
import Loading from './Loading.jsx';
import DefaultPage from './DefaultPage.jsx';

/**
 * Class to hold the ArticlesPanel component.
 * @extends React.Component
 */
class ArticlesPanel extends React.Component {
  /**
   * Set the Initial conditions for showing the News Articles
   * @param {object} props - The properties of the ArticlesPanel Class
   */
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      orderBy: [],
      currentSource: '',
      currentSortValue: '',
      clearable: false,
      setIsLoading: false,
      unsetWelcome: true
    };
    this.getItemsState = this.getItemsState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.getNewSortByValue = this.updateSearch.bind(this);
    this.getNewSortByValue = this.getNewSortByValue.bind(this);
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns the new state and props
   */
  componentWillMount() {
    ArticlesStore.addChangeListener(this.onChange);
  }

  /**
   * The method to set the state of the component when there is a change
   * @return {void} set the state and props.
   */
  onChange() {
    this.setState(this.getItemsState());
    this.setState.setIsLoading(false);
    this.setState.unsetWelcome();
  }

  /**
   * The method that for handling change
   * @return {object} sets the state based on value
   */
  getItemsState() {
    this.getItemsStateNow = '';
    return ({
      currentSource: ArticlesStore.getSourceValue(),
      allItems: ArticlesStore.getAll(),
      currentSortValue: ArticlesStore.getSourceSortBy(),
    });
  }

  /**
   * Method to set the current Sort value and send request to the News Actions.
   * @param {event} event the change event
   * @returns {*} return the is loading props.
   */
  updateSearch(event) {
    const value = event.value;
    this.setState({ currentSortValue: value });
    const urlString = `${this.state.currentSource}&sortBy=${value}`;
    getNewsArticles(urlString, value);
    this.setState.setIsLoading(true);
  }

   /**
   * Invoked immediately when a component is unmounted
   * @returns {*} returns the new state and props.
   */
  componentWillUnMount() {
    ArticlesStore.removeChangeListener(this.onChange);
  }

  /**
   * The method that for handling change
   * @param {array} array - the selected value from select field
   * @return {*} updates the select box options
   */
  getOptions(array) {
    this.arrayMap = array;
    return array.map(val => ({
      value: val,
      label: val,
    }));
  }

  /**
   * Display the News Component
   * @return {jsx} render the ViewNews Content
   */
  render() {
    const myArticles = this.state.allItems.map(item =>
      <Articles key={item.url} data={item} />
    );

    const sortBarOptions = this.getOptions(this.props.sortBy);
    if (this.props.isLoading) {
      return (
        <Loading />
      );
    } else if (this.props.welcome) {
      return (
        <DefaultPage sources={this.props.sources} />
      );
    }
    return (
      <ArticlesList
        articles={myArticles}
        sortOptions={sortBarOptions}
        clearable={this.state.clearable}
        currentSortValue={this.state.currentSortValue}
        updateSearch={this.updateSearch}
      />
    );
  }
}

/**
 * Set the PropTypes for ArticlesPanel
 */
ArticlesPanel.propTypes = {
  sources: PropTypes.array,
  sortBy: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  welcome: PropTypes.bool,
  setIsLoading: PropTypes.func.isRequired,
  unsetWelcome: PropTypes.func.isRequired,
};

export default ArticlesPanel;
