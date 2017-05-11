import React from 'react';
import { Router, Route, Link, BrowserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import MicroEvent from 'microevent';

const Routes = (
    <Router history={BrowserHistory}>
        {/* display a list of article url added*/}
        <Route path="/" component={FeedList}></Route>
        {/* displaying content of the feed*/}
        <Route path="/feed/:id" component={Feed}></Route>
        {/* adding a new feed url*/}
        <Route path="submit" component={SubmitFeed}></Route>
        {/* displays not found message*/}
        <Route path="*" component={NotFound} />
    </Router>
);

ReactDOM.render(Routes, document.getElementById('appContainer'));

// create a dispatcher for the app
// const AppDispatcher = new Flux.Dispatcher();
const AppDispatcher = require('flux').Dispatcher;

// create store named FeedStore
const FeedStore = {
    // method to store feed url's
  addFeed(url) {
    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
        // if url is valid
    if (valid) {
            // stores the url in local storage html5
      let urls = localStorage.getItem('feed-urls');
      urls = JSON.parse(urls);

      if (urls == null) {
        urls = [url];
      } else {
        urls[urls.length] = url;
      }

      localStorage.setItem('feed-urls', JSON.stringify(urls));
            // valid url event triggered
      this.trigger('valid-url');
    } else {
            // invalid url triggered
      this.trigger('invalid-url');
    }
  },
    // store retrieves the url
  getFeeds() {
    let urls = localStorage.getItem('feed-urls');
    urls = JSON.parse(urls);

    if (urls == null) {
      return [];
    }

    return urls;
  }
};

//  call microevent.mixin to trigger event from the store
MicroEvent.mixin(FeedStore);

// header component containing link to home and to the path to add a new url
const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="submit">Add</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

// feedlist component
const FeedList = React.createClass({
  getInitialState() { // retrieves the list of feed urls from feedstore
    return {
      urls: FeedStore.getFeeds()
    };
  },
  render() {
    let count = 0;
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <ul>
              {/* id of the a feed is it's position in the array stored in local local storage*/}
              {this.state.urls.map(function (url) {
                count++;
// link component (instead of <a> tag) to prevent full page reloads changes url and renders the matching component
                return <li> <Link to={'/feed/$ {  count}'}>{url}</Link></li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
});

// submit feed component displays form and button to submit it
const SubmitFeed = React.createClass({
  add() { // when user clicks submit, add handler dispatches action add-feed-url and the url to be added as data
    AppDispatcher.dispatch({
      actionType: 'add-feed-url',
      feedURL: this.refs.feedURL.value
    });
  },
  // when component is mounted listen to invalid/valid events from feedstore
  componentDidMount() {
    FeedStore.bind('invalid-url', this.invalid_url);
    FeedStore.bind('valid-url', this.valid_url);
  },
  valid_url() {
    alert('Added successfully');
  },
  invalid_url() {
    alert('Please enter a valid URL');
  },
  // when component is unmounted we stop listening to events, otherwise they'll be multiple listeners
  componentWillUnmount() {
    FeedStore.unbind('invalid-url', this.invalid_url);
    FeedStore.unbind('valid-url', this.valid_url);
  },
   // form and button
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <form>
            <fieldset className="form-group">
              <label for="formGroupURLInput">Enter URL</label>
              <input type="url" className="form-control" id="formGroupURLInput" ref="feedURL" placeholder="Enter RSS Feed URL" />
            </fieldset>
            <input type="button" value="Submit" className="btn" onClick={this.add} />
          </form>
        </div>
      </div>
    );
  }
});

// action callback that checks for add-feed-url and invokes add-feed from feedstore
AppDispatcher.register(function (action) {
  if (action.actionType === 'add-feed-url') {
    FeedStore.addFeed(action.feedURL);
  }
});

// feed component displays the content of an individual feed url
const SingleFeedStore = { // returns the content of a feed url
  get(id) { // uses server route to fetch content of the url
    let urls = localStorage.getItem('feed-urls');
    urls = JSON.parse(urls);

    const request_url = urls[id - 1];

    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        request = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {
        try {
          request = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {}
      }
    }

    request.open('GET', `/feed?url=${encodeURIComponent(request_url)}`);

    const self = this;

// triggers feed-fetched event
    request.addEventListener('load', function () {
      self.trigger('feed-fetched', request.responseText);
    }, false);

    request.send(null);
  }
};

// called by passing singlefeedstore as an arg so that the store is able to trigger events and others can bind those event
MicroEvent.mixin(SingleFeedStore);

const Feed = React.createClass({
  getInitialState() { // return an empty array
    return {
      data: []
    };
  },
  componentDidMount() {
    SingleFeedStore.get(this.props.params.id); // gets the data asynhronously
    SingleFeedStore.bind('feed-fetched', this.update); // bind an event handler for the feed-fetch event and update the view
  },
  update() {
    const data = JSON.parse(data);
    this.setState({ data: data.rss.channel.item });
  },
  // unbind the even handler as soon as the component is unmounted
  componentWillUnmount() {
    SingleFeedStore.unbind('feed-fetched', this.update);
  },
  // display content of an individual feed url
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <ul>
              {this.state.data.map(function (post) {
                return <li><a href={post.link}>{post.title}</a></li>;
              })}
          </ul>
        </div>
      </div>
    );
  }
});

// not found component
const NotFound = React.createClass({
  render() {
    return (
      <h1>Page Not Found</h1>
    );
  }
});
