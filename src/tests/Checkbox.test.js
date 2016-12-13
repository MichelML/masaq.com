import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Checkbox from '../components/Checkbox';

describe('Checkbox view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox/>, div);
  });
});
