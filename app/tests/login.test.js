import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
// import GooglePlusLogin from '../client/components/newsly/LoginButton.js';

//test the design of the login component
describe('login button component', () => {
    it('snapshot of GooglePlusLogin', () => {
        const login = shallow(<GooglePlusLogin />);
        const tree = shallowToJSON(login);
        expect(tree).toMatchSnapshot();
    })
    //test there is a div containing the login button
    it('asserts there is a googlplus button', () => {
        const login = shallow(<GooglePlusLogin />);
        expect(login.find('#login')).toBe.defined;
    })

    //test there is a button 
    it('displays a login button', () => {
        const login = shallow(<GooglePlusLogin />);
        expect(login.find('#login').text()).toEqual('<Button />');
    })
})