import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ProductCard from '../components/ProductCard';

const testProduct = {
      "tpparticularitesplitgroup" : "Agrobiologique;",
      "tpthumbnailuri" : "http://s7d9.scene7.com/is/image/SAQ/12093494_is",
      "tpcepagesplitgroup" : "Chardonnay 100 %",
      "tpregion" : "Bourgogne",
      "tppays" : "France",
      "sysclickableuri" : "http://www.saq.com/page/fr/saqcom/vin-blanc/domaines-pattes-loups-chablis-premier-cru-butteaux-2013/12093494",
      "systitle" : "Domaines Pattes Loups Chablis Premier Cru Butteaux 2013",
      "tpcepagenomsplitgroup" : "Chardonnay",
      "tpcodesaq" : "12093494",
      "tpdisponibilite" : "Commande Spéciale",
      "tpprixnum" : 53.0,
      "tpprixbande" : "50$ - 75$",
      "tpcategorie" : "Vin blanc",
      "tpformat" : "750 ml",
      "tpprixnormal" : "53,00 $",
      "tpmillesime" : "2013",
      "tpparticularite" : "Agrobiologique"
}

describe('ProductCard view', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductCard key={2934875} product={testProduct} />, div);
  });
});
