import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Home from './../components/Home.jsx';
// import Dispatcher from './../dispatchers/AppDispatcher';
// import ActionTypes from './../constants/ActionTypes.jsx';

describe('Application Home', () => {
  const wrapper = shallow(<Home
  />);
  // const sources = [];
  // const sortby = []
  const currentFilterValue = ''

  it('should exists', () => {
    expect(Home).toExist();
  });

  it('should instantiate correctly', () => {
    expect(typeof Home).toBe('function');
  });

  it('should instantiate correctly', () => {
    expect(typeof Home.sources).toBe('undefined');
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });
});
