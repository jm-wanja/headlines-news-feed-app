import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('App', () => {
  it('renders Headlines App Setup', () => {
    const headlines = shallow(<App />);
    expect(headlines.find('div').text()).toEqual('Headlines App Setup');
  });
});

