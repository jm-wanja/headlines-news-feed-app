import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Loading from '../components/Loading.jsx';

describe('Test Loading component', () => {
  const wrapper = shallow(<Loading />);

  describe('should have an html element called ', () => {
    it('div', () => {
      expect(wrapper.node.type).toBe('div');
    });

    it('div', () => {
      expect(wrapper.node.props.children.props.className)
        .toBe('col m10 s4 offset-m1');
    });
  });
});
