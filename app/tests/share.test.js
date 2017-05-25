import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Share from '../components/Share.jsx';

const props = {
  share: '',
  title: '',
};

describe('Test Loading component', () => {
  const wrapper = shallow(<Share {...props}/>);

  describe('should have an html element called ', () => {
    it('div', () => {
      expect(wrapper.node.type).toBe('div');
    });

    it('div', () => {
      expect(wrapper.node.props.className)
        .toBe('col s12 m9');
    });
  });
});
