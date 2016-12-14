import React, { Component } from 'react';
import MaterialButton from './MaterialButton';
import Chip from './Chip';
import AccordsDialog from './AccordsDialog';

class ProductCard extends Component {
    constructor(props) {
      super(props);
      this.disponibilite = this.props.product.tpdisponibilite.split(';').join(' | ');
      this.isFormat = this.props.product.tpformat ? ", " : "";
      this.dialogID = `dialog-${this.props.product.tpcodesaq}`;
      this.priceFormatted = (() => {
        if (this.props.product.tpenspecial) {
          return (
              <span>
                <span className="item-price mdl-color-text--blue-grey-700">{`${this.props.product.tpprixrabais} `}</span>
                <span className="item-price-normal">{this.props.product.tpprixinitial}</span>
              </span>
          )
        }
        return (
              <span className="item-price mdl-color-text--blue-grey-700">{this.props.product.tpprixnormal}</span>
        )
      })();
    }
    
    showDialog() {
      console.log(this.dialogID);
      document.querySelector('#' + this.dialogID).showModal();
    }

    closeDialog(id) {
      document.querySelector('#' + id).close();
    }

    render() {
      const cepage = this.props.product.tpcepagenomsplitgroup ? this.props.product.tpcepagenomsplitgroup.split(';') : false;
      return (
          <div className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--12-col-phone mdl-shadow--4dp">
            <figure className="mdl-card__media">
              <img src={this.props.product.tpthumbnailuri} alt={this.props.product.systitle} />
            </figure>
            <div className="mdl-card__title">
              <h1 className="mdl-card__title-text">
                {`${this.props.product.systitle}${this.isFormat}${this.props.product.tpformat}`}
              </h1>
            </div>
            <div className="grower"></div>
            <div className="mdl-card__supporting-text">
              <span>{this.disponibilite}</span>
            </div>
            <div className="mdl-card__supporting-text">
              {this.priceFormatted}
            </div>
            <div className="grower"></div>
            <div className="mdl-card__supporting-text">
                <Chip extraClasses="mdl-color--green-A400" 
                      typeOfChips={this.props.product.tpenspecial || false} 
                      chipText="en spécial"/>
                <Chip extraClasses="mdl-color--yellow-200" 
                      typeOfChips={this.props.product.tppastilledegout || false} 
                      chipText={this.props.product.tppastilledegout}/>
                <Chip extraClasses="mdl-color--purple-200" 
                      typeOfChips={this.props.product.tpcepagenomsplitgroup || false} 
                      chipText={cepage ? `${cepage[0]}${cepage.length > 1 ? "+" : ""}` : false}/>
                <Chip extraClasses="mdl-color--blue-200" 
                      typeOfChips={this.props.product.tpparticularite || false} 
                      chipText={this.props.product.tpparticularite}/>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a id={`link-${this.props.product.tpcodesaq}`} 
                 className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--pink-600 product-link" 
                 target="_blank" href={this.props.product.sysclickableuri}>
                VOIR FICHE
              </a>
              <div className="mdl-layout-spacer"></div>
              <button id={`accords-btn-${this.props.product.tpcodesaq}`} 
                      onClick={this.showDialog.bind(this)} 
                      className="mdl-button mdl-button--icon mdl-button--colored" 
                      disabled={this.props.product.tpaccordsnommenu ? false : true}>
                <i className="material-icons">restaurant</i>
              </button>
              <AccordsDialog closeDialog={this.closeDialog.bind(this)} 
                              id={this.dialogID} 
                              accords={this.props.product.tpaccordsnommenu} 
                              tpCodeSAQ={this.props.product.tpcodesaq} 
                              productName={this.props.product.systitle}/>
            </div>
          </div>
      );
    }
};

export default ProductCard; 
