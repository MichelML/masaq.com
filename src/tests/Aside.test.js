import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Aside from '../components/Aside';

describe('Aside view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Aside/>, div);
  });
});
