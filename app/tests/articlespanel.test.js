import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ArticlesPanel from '../components/ArticlesPanel.jsx';

const props = {
  sources: [],
  sortBy: [],
  isLoading: false,
  welcome: true,
  setIsLoading: () => {},
  unsetWelcome: () => {},

};

const wrapper = shallow(<ArticlesPanel {...props} />);

describe('Test ArticlePanel component', () => {
  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should return child component articlesortby', () => {
    expect(wrapper.find('.sort')).toExist();
  });
});
