import React from 'react';
import request from 'superagent';
import { Layout, Drawer, Navigation } from "react-mdl";

export default class SourcesPanel extends React.Component {
    constructor(props) {
        super(props);//def this.props 
        this.state = { //initialize state because the data will change
            sources: [] //empty array because the data from api is in an array
        }
    }

    componentWillMount() { //an instance of the component created
        this.fetchSources().then((data) => {
            this.setState({ //call setstate to change state to populate data into it
                sources: data.body.sources
            });
        });
    }
    fetchSources() {
        return (
            request
                .get('https://newsapi.org/v1/sources?language=en')
        )
    }
    render() {
        console.log("State", this.state);
        return (
            <Drawer title="SOURCES">
                <Navigation>
                    {this.state.sources.length ? this.state.sources.map((source) => (
                        <div id="sources" key={source.id}>
                            <a id="sources-link" href={source.url} target="_blank">{source.name}</a>
                        </div>
                    )) :
                        <div id="loading">Loading...</div>
                    }
                </Navigation>
            </Drawer>
        );
    }
}
