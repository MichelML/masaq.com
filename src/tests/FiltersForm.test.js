import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import FiltersForm from '../components/FiltersForm';

describe('FiltersForm view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FiltersForm/>, div);
  });
});
