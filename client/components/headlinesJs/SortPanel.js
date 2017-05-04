import React from 'react';
import { RadioGroup, Radio } from 'react-mdl';

export default class SortPanel extends React.Component {
    render() {
        return (
            <div>
                <RadioGroup name="sort" value="opt1">
                    <Radio value="opt1" ripple>Top</Radio>
                    <Radio value="opt2" ripple>Latest</Radio>
                    <Radio value="opt3" ripple>Popular</Radio>
                </RadioGroup>
            </div>
        );
    }
}