import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import SortSection from '../components/SortSection';

describe('SortSection view', () => {
  it('renders without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortSection/>, div);
  });

  it('renders with sortCriteriaList', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortSection sortCriteriaList={[{name:"test"}]}/>, div);
  });

  it('renders with object props with name property and isActive propert', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SortSection sortCriteriaList={[{name:"test", isActive:false}]}/>, div);
  });
});
