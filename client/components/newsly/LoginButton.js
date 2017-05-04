import React from 'react';
import { Button } from 'react-mdl';

export default class GooglePlusLogin extends React.Component {
    render() {

        return (
            <div id="login">
                <Button className='login' raised accent ripple>GooglePlusLogin</Button>
            </div>
        );
    }
}