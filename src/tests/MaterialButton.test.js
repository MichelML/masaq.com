import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import MaterialButton from '../components/MaterialButton';

describe('MaterialButton view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MaterialButton icon="link"/>, div);
  });
});
