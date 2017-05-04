import React from 'react';
import { shallow } from 'enzyme';
import HeaderPanel from '../client/components/headlinesJs/HeaderPanel.js';

//test that the name of the header is NEWSLY
describe('Header Panel Component', () => {
    it('renders the feedName', () => {
        const header = shallow(<HeaderPanel />);
        expect(header.find('.feed-name').text()).toEqual('NEWSLY READER');
    });
})