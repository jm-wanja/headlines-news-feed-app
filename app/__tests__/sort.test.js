import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
// import SortPanel from '../client/components/newsly/SortPanel.js';

//test the design of the sort component
describe('sort panel component', () => {
    it('snapshot of SortPanel', () => {
        const sort = shallow(<SortPanel />);
        const tree = shallowToJSON(sort);
        expect(tree).toMatchSnapshot();
    })

    //test there is a div containing the radiogroup
    it('asserts there is a sort radiogroup', () => {
        const sort = shallow(<SortPanel />);
        expect(sort.find('#sort')).toBe.defined;
    })
    //test there is a top radio
    it('displays a top radio', () => {
        const sort = shallow(<SortPanel />);
        expect(sort.find('.top').text()).toEqual('<Radio />');
    })

    //test there is a latest radio
    it('displays a latest radio', () => {
        const sort = shallow(<SortPanel />);
        expect(sort.find('.latest').text()).toEqual('<Radio />');
    })

    //test there is a popular radio
    it('displays a popular radio', () => {
        const sort = shallow(<SortPanel />);
        expect(sort.find('.popular').text()).toEqual('<Radio />');
    })
})