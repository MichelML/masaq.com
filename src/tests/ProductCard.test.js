import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ProductCard from '../components/ProductCard';

describe('ProductCard view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductCard/>, div);
  });
});
