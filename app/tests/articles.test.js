import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Articles from '../components/Articles.jsx';

const props = {
  data: {
    author: 'Scott Gerber',
    title: '10 tech innovations that will revolutionize the digital world',
    description: 'Technology has been shaping the way we work and live for decades. As everything in our world is becoming increasingly digital, new software and applications continue to emerge and arguably ...',
    url: 'https://thenextweb.com/insider/2017/05/25/10-tech-innovations-will-revolutionize-digital-world/',
    urlToImage: 'https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Murray-Newlands-1.png',
    publishedAt: '2017-05-25T08:00:36Z'
  }
};
it('Articles component', () => {
  const wrapper = shallow(<Articles {...props} />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should render div elements', () => {
    expect(wrapper.find('div')).toExist();
  });

  it('the props to be an object', () => {
    expect(typeof wrapper.node.props.children).toBe('object');
  });
});
