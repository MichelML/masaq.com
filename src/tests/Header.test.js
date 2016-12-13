import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

describe('Header view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
  });
});
