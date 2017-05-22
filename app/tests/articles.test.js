import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Articles from '../components/Articles.jsx';

describe('Test Article component', () => {
  const wrapper = shallow(<Articles />);
  it('should have a <div> tag', () => {
    expect(wrapper.node.type).toBe('key={props.data.url}');
  });
});
