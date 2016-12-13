import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import SortCriteria from '../components/SortCriteria';

describe('SortCriteria view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortCriteria/>, div);
  });
});
