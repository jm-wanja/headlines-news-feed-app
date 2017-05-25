import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SourcesPanel from '../components/SourcesPanel.jsx';

const props = {
  sources: [],
  setSortBy: () => {},
  setIsLoading: () => {},

};

describe('SourcesPanel Component', () => {
  const wrapper = shallow(<SourcesPanel {...props}
  />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });
});
