import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import NavBar from '../components/NavBar';
import Navigation from '../components/Navigation';
import HeaderTitle from '../components/HeaderTitle';
import SearchBar from '../components/SearchBar';


describe('HeaderTitle', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderTitle/>, div);
  });
});

describe('SearchBar', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar/>, div);
  });
});

describe('Navigation', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navigation/>, div);
  });

  it('should contain a search bar', () => {
    expect(shallow(<Navigation/>).find(SearchBar).length).toBeGreaterThan(0); 
  });
});

describe('Navbar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar/>, div);
  });

  it('should contain a title', () => {
    let Nav = shallow(<NavBar/>);
    expect(Nav.find(HeaderTitle).length).toBe(1); 
  });
  
  it('should contain a search bar', () => {
    let Nav = shallow(<NavBar/>);
    expect(Nav.find(Navigation).length).toBeGreaterThan(0); 
  });
});



