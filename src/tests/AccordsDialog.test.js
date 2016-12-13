import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import AccordsDialog from '../components/AccordsDialog';

describe('AccordsDialog view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccordsDialog/>, div);
  });
});
