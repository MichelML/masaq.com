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
    updateComponent() {
      const self = this;
      $('#filters').prop('disabled', true);
      $('#did-you-mean').addClass('hide');
      $('#loading').show();
      $.ajax(CoveoAPI.apiURL, {
          method: 'POST',
          headers: CoveoAPI.postRequestAuthorizationHeader,
          contentType:'application/json',
          data: JSON.stringify(Object.assign({},CoveoAPI.postRequestBodyFrame, Hash.parseNewHash(window.location.hash)))
        })
        .then(response => { 
          self.setState({
            history: self.state.history.concat([{
              groupByResults: response.groupByResults,
              products: response.results.map(result => result.raw),
              totalCount: response.totalCount,
              didYouMean: response.queryCorrections.length ? response.queryCorrections[0].correctedQuery : "",
              hash: window.location.hash
            }])
          });
        })
        .catch((e) => { 
          console.log(e);
          self.setState({
            history: self.state.history.concat([{
              groupByResults: [],
              products: [],
              totalCount: 0,
              hash: window.location.hash,
              error: e
            }])
          });
        })
        .done(() => {
          window.componentHandler.upgradeDom();
          if (self.state.history[self.state.history.length-1].didYouMean)  {
            $('#did-you-mean').removeClass('hide');
          }
          $('#loading').hide();
          $('#products-grid').scrollTop(0);
        })
    }
    render() {
      const updateComponentWithHash = this.updateComponent.bind(this);
      Hash.initListener(updateComponentWithHash);
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
          $('#loading').hide();
        })
      }

      const currentAppState = this.state.history[this.state.history.length-1];
      return (
        <div className="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
          <Header/>
          <Aside groupByResults={currentAppState.groupByResults || []}/>
          <ProductsGrid products={currentAppState.products || []} 
                        numberOfResults={currentAppState.totalCount ? currentAppState.totalCount : 0}
                        didYouMean={currentAppState.didYouMean}/>
          <div className="grower"></div>
          <footer className="footer-container">
            <span className="footer-text">maSAQ.com | Découvrez vos goûts
            </span>              
          </footer>
        </div>

      );
    }
} 

export default MaSAQ;