import React from 'react';
import { Header } from "react-mdl";

export default class HeaderPanel extends React.Component {
    render() {
        return (
            <div>
                {/*<div className='feed-name'>NEWSLY READER</div>*/}
                <Header title="NEWSLY READER" style={{ marginLeft: "240px" }}>

                </Header>
            </div>
        );
    }
}