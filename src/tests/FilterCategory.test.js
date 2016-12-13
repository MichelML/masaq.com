import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import FilterCategory from '../components/FilterCategory';

describe('FilterCategory view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterCategory/>, div);
  });
});
