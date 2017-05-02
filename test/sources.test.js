import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import SourcesPanel from '../client/components/headlinesJs/sourcesPanel.js';

// describe('App', () => {
//   it('renders Headlines App Setup', () => {
//     const headlines = shallow(<App />);
//     expect(headlines.find('div').text()).toEqual('Headlines App Setup');
//   });
// });

// describe('Headlines', () => {
//   it('renders sourcesPanel', () => {
//     const sources = shallow(<Headlines />);
//     expect(sources.find('.sourcesPanel').toBe.defined);
//   }); 
// })

describe('Sources Panel Component', () => {
  it('snapshot of SourcePanel', () => {
    const sources = shallow(<SourcesPanel data={ {} }/>);
    const tree = shallowToJSON(sources);
    expect(tree).toMatchSnapshot();
  }); 
})