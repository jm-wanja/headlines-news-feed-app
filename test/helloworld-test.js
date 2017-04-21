import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('App', () => {
  it('renders hello world', () => {
    const welcome = shallow(<App />);
    expect(welcome.find('div').text()).toEqual('Hello World');
  });
});

