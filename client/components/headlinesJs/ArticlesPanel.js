import React from 'react';

export default class ArticlesPanel extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.length && data.map((dataObject) => (
                    <div> {dataObject.title} </div>
                ))}
            </div>
        );
    }
}