import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ArticlesPanel from '../client/components/headlinesJs/ArticlesPanel.js';

describe('Articles Panel Component', () => {

  it('asserts that article state is instatiated as an empty array', () => {
    const wrapper = shallow(<ArticlesPanel />);

    expect(wrapper.state().articles).toEqual([]);
    expect(wrapper.find('#article').length).toEqual(0);
  })

  it('asserts that when articles are loading, loading div appears', () => {
    const wrapper = shallow(<ArticlesPanel />);

    expect(wrapper.state().articles).toEqual([]);
    expect(wrapper.find('#loading').length).toEqual(1);
  })

  it("asserts that on setState sources state will have content ", () => {
    const wrapper = shallow(<ArticlesPanel />);

    wrapper.setState({ articles: [{ title: "Wanja", publishedAt: 1 }, { title: "Joy", publishedAt: 2 }] });

    expect(wrapper.state().articles.length).toBeGreaterThan(0);
    expect(wrapper.find('#article').length).toBeGreaterThan(0);
  });

  it("asserts that when articles is populated you have a link", () => {
    const wrapper = shallow(<ArticlesPanel />);

    wrapper.setState({
      articles: [
        { name: "zeed", publishedAt: 1, url: "www.google.com" },
        { name: "meer", publishedAt: 2, url: "www.google.com" }
      ]
    });

    expect(wrapper.state().articles.length).toBeGreaterThan(0);
    expect(wrapper.find('#articles-link').length).toBeGreaterThan(0);
  })
}) 