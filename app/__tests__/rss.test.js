import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import RssFeed from '../client/components/newsly/RssFeed.js';

//test the design of the whole app
describe('Rss Feed Component', () => {
    it('snapshot of rssFeed', () => {
        const rss = shallow(<RssFeed />);
        const tree = shallowToJSON(rss);
        expect(tree).toMatchSnapshot();
    })

    //test that there is a sources panel component
    it('renders sourcesPanel', () => {
        const sources = shallow(<RssFeed />);
        expect(sources.find('.sourcesPanel')).toBe.defined;
    })

    //test that there is a articles panel component
    it('renders articlesPanel', () => {
        const articles = shallow(<RssFeed />);
        expect(articles.find('.articlesPanel')).toBe.defined;
    })

    //test that there is a sort panel component
    it('renders sortPanel', () => {
        const sort = shallow(<RssFeed />);
        expect(sort.find('.sortPanel')).toBe.defined;
    })

    //test that there is a login button component
    it('renders loginButton', () => {
        const login = shallow(<RssFeed />);
        expect(login.find('.loginButton')).toBe.defined;
    })

    //test that there is a headers panel component
    it('renders headerpanel', () => {
        const header = shallow(<RssFeed />);
        expect(header.find('.headerpanel')).toBe.defined;
    })
})