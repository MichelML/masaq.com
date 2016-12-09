import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Drawer from '../components/Drawer';
import Main from '../components/Main';
import FiltersMainTitle from '../components/FiltersMainTitle';
import FiltersForm from '../components/FiltersForm';
import Checkbox from '../components/Checkbox';
/* eslint-disable */
import PriceSlider from '../components/PriceSlider';
/* eslint-enable */


describe('Drawer main title', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FiltersMainTitle/>, div);
  });

  it('should be named "Filtres de recherche"', () => {
    expect(shallow(<FiltersMainTitle/>).contains("Filtres de recherche")).toBe(true);
  });

});

describe('Filters form', () => {
   it('should render', () => {
      const div = document.createElement('div');
      ReactDOM.render(<FiltersForm/>, div);
   });

   it('should contain a generic filter section', () => {
      expect(shallow(<FiltersForm/>).find('#filters-generic').length).toBeGreaterThan(0);
   });

   describe('generic filters section', () => {
      it('should have a checkbox for looking for special deals', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(0).is('#specials-checkbox')).toBe(true);
      });
      it('should have a checkbox for looking for products in succursale', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(1).is('#en-succursale-checkbox')).toBe(true);
      });
      it('should have a checkbox for looking for products available online', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(2).is('#en-ligne-checkbox')).toBe(true);
      });

      it('should contain a slider for price range', () => {
        expect(shallow(<FiltersForm/>).find(PriceSlider).length).toBeGreaterThan(0);
      });
   });
});

describe('Drawer for filters', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Drawer/>, div);
  });

  it('should be a child of main', () => {
    expect(shallow(<Main/>).find(Drawer).length).toBeGreaterThan(0); 
  });
});
