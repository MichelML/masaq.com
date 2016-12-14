import React from 'react';
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
      <main className="mdl-layout__content content-grid wrapper">
        <h6 id="totaln-products">
          Nombre de produits trouvés:&nbsp; 
          <span id="totaln-products-number">
            {props.numberOfResults}
          </span>
        </h6>
        <div className="mdl-grid">
          {gridContent} 
        </div>
      </main>
    );
};

export default ProductsGrid; 
