import React, { Component } from 'react';
import Hash from '../utils/hash.js';
import CoveoAPI from '../utils/coveo_api.js';
import $ from 'jquery';
import Header from './Header';
import Aside from './Aside';
import ProductsGrid from './ProductsGrid';

class MaSAQ extends Component {
    constructor(props) {
      super(props);
      this.state = {
       history: [{groupByResults:[],products:[],totalCount:0, hash:"#"}]
      }
    }
    updateComponent(component) {
      $.ajax(CoveoAPI.apiURL, {
          method: 'POST',
          headers: CoveoAPI.postRequestAuthorizationHeader,
          contentType:'application/json',
          data: JSON.stringify(CoveoAPI.postRequestBodyFrame)
        })
        .then(response => { 
          component.setState({
            history: component.state.history.concat([{
              groupByResults: response.groupByResults,
              products: response.results.map(result => result.raw),
              totalCount: response.totalCount,
              hash: window.location.hash
            }])
          });
        })
        .catch((e) => { 
          component.setState({
            history: component.state.history.concat([{
              groupByResults: [],
              products: [],
              totalCount: [],
              hash: window.location.hash,
              error: e
            }])
          });
        })
        .done(() => {
          window.componentHandler.upgradeDom();
        })
    }
    render() {
      if (this.state.history.length === 1) {
        window.location.hash = "";
        $.ajax(CoveoAPI.apiURL, {
          method: 'POST',
          headers: CoveoAPI.postRequestAuthorizationHeader,
          contentType:'application/json',
          data: JSON.stringify(CoveoAPI.postRequestBodyFrame)
        })
        .then(response => { 
          this.setState({
            history: this.state.history.concat([{
              groupByResults: response.groupByResults,
              products: response.results.map(result => result.raw),
              totalCount: response.totalCount,
              hash: window.location.hash
            }])
          });
        })
        .catch((e) => { 
          this.setState({
            history: this.state.history.concat([{
              groupByResults: [],
              products: [],
              totalCount: [],
              hash: window.location.hash,
              error: e
            }])
          });
        })
        .done(() => {
          window.componentHandler.upgradeDom();
        })
      }
      Hash.initListener(() => {this.updateComponent(this)});
      const currentAppState = this.state.history[this.state.history.length-1];
      return (
        <div className="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <Header/>
          <Aside groupByResults={currentAppState.groupByResults || []}/>
          <ProductsGrid products={currentAppState.products || []} 
                        numberOfResults={currentAppState.totalCount ? currentAppState.totalCount : 0} />
        </div>
      );
    }
} 

export default MaSAQ;
