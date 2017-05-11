import React from 'react';
import request from 'superagent';
import { Layout, Drawer, Navigation } from "react-mdl";

export default class ArticlesPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentWillMount() {
        this.fetchArticles().then((data) => {
            this.setState({
                articles: data.body.articles
            });
        });
    }
    fetchArticles() {
        return (
            request
                .get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe')
        )
    }
    render() {
        console.log("State", this.state);
        return (
            <div>
                <div style={{ marginLeft: 300, paddingTop: 20 }}>
                    {this.state.articles.length ? this.state.articles.map((article) => (
                        <div id="article" key={article.publishedAt}>
                            <a id="articles-link" href={article.url} target="_blank">{article.title}</a>
                        </div>
                    )) :
                        <div id="loading">Loading...</div>
                    }
                </div>
            </div>
        );
    }
}