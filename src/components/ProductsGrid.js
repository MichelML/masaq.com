import React from 'react';
import Hash from '../utils/hash.js';
import SAQ from '../utils/saq.js';
import ProductCard from './ProductCard';
import ErrorCard from './ErrorCard';

const ProductsGrid = (props) => {
    const isNoProducts = !props.products.length;
    const gridContent = (() => {
      if (isNoProducts) {
        return (
          <ErrorCard description="Aucun produit trouvé"/>
        )
      }
      return (
        props.products.map((product) => {
          return <ProductCard key={product.tpcodesaq} product={product}/>
        })
      );
    })();


    return (
      <main id="products-grid" className="mdl-layout__content content-grid wrapper">
        <h6 id="totaln-products">
          Nombre de produits trouvés:&nbsp; 
          <span id="totaln-products-number">
            {props.numberOfResults}
          </span>
        </h6>
        <h6 id="did-you-mean" className="hide">
          Essayer plutôt:  
          <a id="did-you-mean-link" onClick={(e) => {
            document.getElementById('search-bar').value = e.target.innerHTML;
            Hash.setNewHash(e);
          }}>
            {props.didYouMean}
          </a>
        </h6>
        <div className="mdl-grid">
          {gridContent} 
        </div>
        <button id="more-results" className="mdl-button mdl-js-button mdl-button--raised" onClick={Hash.setNewHash}>
          PLUS DE RÉSULTATS
        </button>
        <div id="loading">
        </div>
      </main>
    );
};

export default ProductsGrid; 
