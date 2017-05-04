import React from 'react';
import { shallow } from 'enzyme';
import HeaderPanel from '../client/components/newsly/HeaderPanel.js';

//test that the name of the header is NEWSLY READER
describe('Header Panel Component', () => {
    it('renders the feedName', () => {
        const header = shallow(<HeaderPanel />);
        expect(header.find('.feed-name').text()).toEqual('NEWSLY READER');
    });
})