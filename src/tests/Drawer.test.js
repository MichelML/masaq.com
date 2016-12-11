import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Drawer from '../components/Drawer';
import Main from '../components/Main';
import FiltersMainTitle from '../components/FiltersMainTitle';
import FiltersForm from '../components/FiltersForm';
import Checkbox from '../components/Checkbox';
import NumericTextField from '../components/NumericTextField';


describe('Drawer main title', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FiltersMainTitle/>, div);
  });

  it('should be named "Critères de recherche"', () => {
    expect(shallow(<FiltersMainTitle/>).contains("Critères de recherche")).toBe(true);
  });

});

describe('Filters form', () => {
   it('render', () => {
      const div = document.createElement('div');
      ReactDOM.render(<FiltersForm/>, div);
   });

   it('contain a generic filter section', () => {
      expect(shallow(<FiltersForm/>).find('#filters-generic').length).toBeGreaterThan(0);
   });

   it('contain a generic filter section', () => {
     expect(shallow(<FiltersForm/>).find('#filters-categories').length).toBeGreaterThan(0);
   });

   describe('generic filters section', () => {
      it('have a checkbox for looking for special deals', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(0).is('#specials-checkbox')).toBe(true);
      });
      it('have a checkbox for looking for products in succursale', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(1).is('#en-succursale-checkbox')).toBe(true);
      });
      it('have a checkbox for looking for products available online', () => {
        expect(shallow(<FiltersForm/>).find(Checkbox).at(2).is('#en-ligne-checkbox')).toBe(true);
      });

      it('contains a NumericTextField for minimum price', () => {
        expect(shallow(<FiltersForm/>).find(NumericTextField).at(0).is('#prix-minimum')).toBe(true);
      });

      it('contains a NumericTextField for maximum price', () => {
        expect(shallow(<FiltersForm/>).find(NumericTextField).at(1).is('#prix-maximum')).toBe(true);
      });
   });

   describe('categories filters', () => {

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
