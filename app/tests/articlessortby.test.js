import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ArticlesSortBy from '../components/ArticlesSortBy.jsx';

const props = {
  articles: [],
  sortOptions: [],
  currentSortValue: '',
  updateSearch: () => {},
  clearable: true,

};

describe('ArticlesSortBy component', () => {
  const wrapper = shallow(<ArticlesSortBy {...props}
  />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });
});
