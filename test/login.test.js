import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import GooglePlusLogin from '../client/components/headlinesJs/LoginButton.js';

describe('login button component', () => {
    it('snapshot of GooglePlusLogin', () => {
        const login = shallow(<GooglePlusLogin />);
        const tree = shallowToJSON(login);
        expect(tree).toMatchSnapshot();
    })

    it('asserts there is a googlplus button', () => {
        const login = shallow(<GooglePlusLogin />);
        expect(login.find('#login')).toBe.defined;
    })
})