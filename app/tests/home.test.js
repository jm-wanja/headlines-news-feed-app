import expect from 'expect';
import Home from './../components/Home.jsx';
// import Dispatcher from './../dispatchers/AppDispatcher';
// import ActionTypes from './../constants/ActionTypes.jsx';

describe('Application Home', () => {
  // const sources = [];
  // const sortby = []

  it('should exists', () => {
    expect(Home).toExist();
  });

  it('should instantiate correctly', () => {
    expect(typeof Home).toBe('object');
  });

  it('should instantiate correctly', () => {
    expect(typeof Home.sources).toBe('object');
  });
});
