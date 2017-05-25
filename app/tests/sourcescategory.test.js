import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SourcesCategory from '../components/SourcesCategories.jsx';

const props = {
  options: [],
  currentFilterValue: '',
  clearable: true,
  updateSearch: () => {},

};

describe('Test SourcesCategory component', () => {
  const wrapper = shallow(<SourcesCategory {...props} />);

  describe('should have an html element called ', () => {
    it('div', () => {
      expect(wrapper.node.type).toBe('div');
    });
  });
});
