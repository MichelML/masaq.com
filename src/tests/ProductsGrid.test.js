import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ProductsGrid from '../components/ProductsGrid';

describe('ProductsGrid view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductsGrid products={[]} numberOfResults={876}/>, div);
  });
});
