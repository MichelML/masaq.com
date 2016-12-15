import React, { Component } from 'react';
import FilterCategory from './FilterCategory';
import Checkbox from './Checkbox';

class FiltersForm extends Component {
    shouldCategoryRender = (rawCategory, rawCategoryName) => {
      return rawCategory.field === rawCategoryName && rawCategory.values;
    }

    createCategoryObject(rawCategory, cleanCategoryName, rawCategoryName) {
      return {
        rawCategoryName: rawCategoryName,
        categoryName: cleanCategoryName,
        values: rawCategory.values
      };
    }

    renderCategory(category) {
      if (category) {
        return (
          <FilterCategory 
            key={category.rawCategoryName} 
            id={category.rawCategoryName}
            categoryName={category.categoryName}
            values={category.values}/>
        );
      }
      return (null);
    }

    renderSpecials(category) {
      if (category) {
        return (
          <fieldset className="mdl-grid" id={category.rawCategoryName}>
            <legend className="hide-legend">{category.categoryName}</legend>
            <div className="mdl-cell mdl-cell--10-col underline-border">
              <span className="filter-title">{category.categoryName}</span>
            </div>
            <div className="mdl-cell mdl-cell--10-col">
              <Checkbox id={"enspecial"} 
                        description={category.categoryName} 
                        value={category.categoryName} 
                        count={category.values[0].NumberOfResults}
                        name={category.categoryName}/>
            </div>
          </fieldset>
        );
      }
      return (null);
    }

    render() {
      const rawCategories = (this.props.groupByResults) ? this.props.groupByResults : [];
      const possibleCategories = rawCategories.reduce((categories, category) => {
        if (this.shouldCategoryRender(category, "tpenspecial")) {
          categories["tpenspecial"] = this.createCategoryObject(category, "En spécial", "tpenspecial");
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tpdisponibilite")) {
          categories["tpdisponibilite"] = this.createCategoryObject(category, "Disponibilité" ,"tpdisponibilite")
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tpformat")) {
          categories["tpformat"] = this.createCategoryObject(category, "Format" ,"tpformat")
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tpcategorie")) {
          categories["tpcategorie"] = this.createCategoryObject(category, "Catégorie" ,"tpcategorie")
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tppays")) {
          categories["tppays"] = this.createCategoryObject(category, "Pays" ,"tppays")
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tpregion")) {
          categories["tpregion"] = this.createCategoryObject(category, "Région" ,"tpregion")
          return categories;
        } 
        else if (this.shouldCategoryRender(category, "tppastilledegout")) {
          categories["tppastilledegout"] = this.createCategoryObject(category, "Pastille de goût" ,"tppastilledegout")
          return categories;
        }
        else if (this.shouldCategoryRender(category, "tpmillesime")) {
          categories["tpmillesime"] = this.createCategoryObject(category, "Millésime" ,"tpmillesime")
          return categories;
        }
        else if (this.shouldCategoryRender(category, "tpparticularitesplitgroup")) {
          categories["tpparticularitesplitgroup"] = this.createCategoryObject(category, "Particularités" ,"tpparticularitesplitgroup")
          return categories;
        }
        return categories;
      }, {}); 

      return (
        <form id="filters" className="white-text">
          {this.renderSpecials(possibleCategories["tpenspecial"])}
          {this.renderCategory(possibleCategories["tpdisponibilite"])}
          {this.renderCategory(possibleCategories["tpformat"])}
          {this.renderCategory(possibleCategories["tpcategorie"])}
          {this.renderCategory(possibleCategories["tppays"])}
          {this.renderCategory(possibleCategories["tpregion"])}
          {this.renderCategory(possibleCategories["tppastilledegout"])}
          {this.renderCategory(possibleCategories["tpparticularitesplitgroup"])}
          {this.renderCategory(possibleCategories["tpmillesime"])}
        </form>
      );
    }
};

export default FiltersForm;
