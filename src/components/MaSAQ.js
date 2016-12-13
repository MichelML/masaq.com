import React, { Component } from 'react';
import Header from './Header';
import Aside from './Aside';
import ProductsGrid from './ProductsGrid';

class MaSAQ extends Component {
  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        <Header/>
        <Aside/>
        <ProductsGrid products={[]} numberOfResults={3429875} />
      </div>
    )
  }
} 

export default MaSAQ;
