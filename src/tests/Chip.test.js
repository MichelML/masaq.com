import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Chip from '../components/Chip';

describe('Chip view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chip/>, div);
  });
});
