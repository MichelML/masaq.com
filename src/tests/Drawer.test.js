import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Drawer from '../components/Drawer';
import Main from '../components/Main';


describe('Drawer', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Drawer/>, div);
  });

  it('should be a child of main', () => {
    expect(shallow(<Main/>).find(Drawer).length).toBeGreaterThan(0); 
  });
});
