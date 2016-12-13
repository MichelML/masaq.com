import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import SearchBar from '../components/SearchBar';

describe('SearchBar view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar/>, div);
  });
});
