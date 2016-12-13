import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ErrorCard from '../components/ErrorCard';

describe('ErrorCard view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorCard/>, div);
  });
});
