import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import SortPanel from '../client/components/headlinesJs/SortPanel.js';

describe('sort panel component', () => {
    it('snapshot of SortPanel', () => {
        const sort = shallow(<SortPanel />);
        const tree = shallowToJSON(sort);
        expect(tree).toMatchSnapshot();
    })

    it('asserts there is a sort radiogroup', () => {
        const sort = shallow(<SortPanel />);
        expect(sort.find('#sort')).toBe.defined;
    })
})