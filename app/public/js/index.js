const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const BrowserHistory = ReactRouter.browserHistory;

const Routes = (
    <Router history={BrowserHistory}>
        <Route path="/" component={ArticlesList}></Route> //for the homepage
        <Route path="/feed/:id" component={Feed}></Route> //displaying content of the feed
        <Route path="submit" component={SubmitFeed}></Route> //adding a new feed url
        <Route path="*" component={NotFound} /> displays not found message
    </Router>
);

ReactDOM.render(Routes, document.getElementById('appContainer'));
