import React from 'react';
import { RadioGroup, Radio } from 'react-mdl';

export default class SortPanel extends React.Component {
    render() {
        return (
            <div className='radioGroup' style={{ marginLeft: 300 }}>
                <RadioGroup name="sort" value="opt1">
                    <Radio className='top' value="opt1" ripple>Top</Radio>
                    <Radio className='latest' value="opt2" ripple>Latest</Radio>
                    <Radio className='popular' value="opt3" ripple>Popular</Radio>
                </RadioGroup>
            </div>
        );
    }
}