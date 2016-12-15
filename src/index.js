import './utils/dialog-polyfill.js';
import './styles/dialog-polyfill.css';
import React from 'react';
import ReactDOM from 'react-dom';
import MaSAQ from './components/MaSAQ';
import './styles/MaSAQ.css';
import './styles/Header.css';
import './styles/SortSection.css';
import './styles/SortCriteria.css';
import './styles/Aside.css';
import './styles/FiltersForm.css';
import './styles/FilterCategory.css';
import './styles/Checkbox.css';
import './styles/ProductsGrid.css';
import './styles/ProductCard.css';
import './styles/ErrorCard.css';
import './styles/AccordsDialog.css';
import './styles/MaterialButton.css';
import './styles/Chip.css';

ReactDOM.render( 
  <MaSAQ/>,
  document.getElementById('root')
);
