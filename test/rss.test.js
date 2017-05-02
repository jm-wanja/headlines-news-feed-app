import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import RssFeed from '../client/components/headlinesJs/RssFeed.js';

describe('Rss Feed Component', () => {
    it('snapshot of rssFeed', () => {
        const rss = shallow(<RssFeed />);
        const tree = shallowToJSON(rss);
        expect(tree).toMatchSnapshot();
    }),

        it('renders sourcesPanel', () => {
            const sources = shallow(<RssFeed />);
            expect(sources.find('.sourcesPanel')).toBe.defined;
        }),

        it('renders articlesPanel', () => {
            const articles = shallow(<RssFeed />);
            expect(articles.find('.articlesPanel')).toBe.defined;
        }),

        it('renders filterPanel', () => {
            const filters = shallow(<RssFeed />);
            expect(filters.find('.filtersPanel')).toBe.defined;
        }),
        
        it('renders loginButton', () => {
            const login = shallow(<RssFeed />);
            expect(login.find('.loginButton')).toBe.defined;
        }),

        it('renders headerpanel', () => {
            const header = shallow(<RssFeed />);
            expect(header.find('.headerpanel')).toBe.defined;
        })



})