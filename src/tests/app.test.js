import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import renderer from 'react-test-renderer'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a snapshot', () =>{
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot()
  })

});
