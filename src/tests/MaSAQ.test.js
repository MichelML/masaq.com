import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import MaSAQ from '../components/MaSAQ';

describe('MaSAQ view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MaSAQ/>, div);
  });
});
