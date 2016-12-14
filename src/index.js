import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CoveoAPI from './utils/coveo_api.js';
import MaSAQ from './components/MaSAQ';
import FiltersForm from './components/FiltersForm';
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

$.ajax(CoveoAPI.apiURL, {
  method: 'POST',
  headers:CoveoAPI.postRequestAuthorizationHeader,
  contentType:'application/json',
  data: JSON.stringify(CoveoAPI.postRequestBodyFrame)
})
.then(response => { 
  console.log(response)
})
.catch((e) => { console.log('Error:', e) })
