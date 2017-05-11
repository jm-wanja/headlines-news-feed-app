import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
// import SourcesPanel from '../client/components/newsly/SourcesPanel.js';

describe('Sources Panel Component', () => {
  //test for the design of the souces panel component
  it('snapshot of SourcePanel', () => {
    const sources = shallow(<SourcesPanel />);
    const tree = shallowToJSON(sources);
    expect(tree).toMatchSnapshot();
  });

  //test that the state source  is an empty array
  it("asserts that sources state is instatiated as an empty array", () => {
    const wrapper = shallow(<SourcesPanel />);

    expect(wrapper.state().sources).toEqual([]);
    expect(wrapper.find('#sources').length).toEqual(0); //test that the div has no data before setstate
  })

  //test the loading.. alert message
  it("asserts that when sources are loading loading div appears", () => {
    const wrapper = shallow(<SourcesPanel />);

    expect(wrapper.state().sources).toEqual([]);
    expect(wrapper.find('#loading').length).toEqual(1);
  })

  //test that the setState sources will have data displayed by names
  it("asserts that on setState sources state will have content ", () => {
    const wrapper = shallow(<SourcesPanel />);

    wrapper.setState({ sources: [{ name: "Wanja", id: 1 }, { name: "Joy", id: 2 }] });

    expect(wrapper.state().sources.length).toBeGreaterThan(0);
    expect(wrapper.find('#sources').length).toBeGreaterThan(0);
    expect(wrapper.state().sources.length).toEqual(wrapper.find('#sources').length);
  })
  //test for the link of sources in the setState and div
  it("asserts that when sources is populated you have a link", () => {
    const wrapper = shallow(<SourcesPanel />);

    wrapper.setState({
      sources: [
        { name: "Wanja", id: 1, url: "www.google.com" },
        { name: "Joy", id: 2, url: "www.google.com" }
      ]
    });

    expect(wrapper.state().sources.length).toBeGreaterThan(0);
    expect(wrapper.find('#sources-link').length).toBeGreaterThan(0);
  })
})

