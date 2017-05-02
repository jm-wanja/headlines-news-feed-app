import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ArticlesPanel from '../client/components/headlinesJs/articlesPanel.js';

describe('Articles Panel Component', () => {
  it('snapshot of ArticlePanel', () => {
    const articles = shallow(<ArticlesPanel data={ {} }/>);
    const tree = shallowToJSON(articles);
    expect(tree).toMatchSnapshot();
  }); 
})