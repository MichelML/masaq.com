const request = require('request');
const util = require('util');
const fs = require('fs');

request.get('https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b&numberOfResults=1000', (error, response, data) => {
  const categories = JSON.parse(data).results.reduce((cats, alc) => {
    if (alc.raw.tpcategorie) {
      if (!cats[alc.raw.tpcategorie.split(' ')[0]]) {
        cats[alc.raw.tpcategorie.split(' ')[0]] = [];
      } else if (cats[alc.raw.tpcategorie.split(' ')[0]].indexOf(alc.raw.tpcategorie) < 0) {
        cats[alc.raw.tpcategorie.split(' ')[0]].push(alc.raw.tpcategorie);
      }
    } else {
      cats.noCategoryNames = (cats.noCategoryNames) ? cats.noCategoryNames : [];
      cats.noCategoryNames.push(alc.Title);
    }
    return cats
  }, {});
  const categLength = (function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  })(categories);
  const sampleDB = {};
  let counter = 0;
  for (key in categories) {
    if (key) {
      ((type) => {
        request.get('https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b&numberOfResults=50&q=' + encodeURIComponent(type), (error, response, data) => {
          counter++;
          console.log(counter);
          if (!error) {
            sampleDB['results'] = (sampleDB['results']) ? sampleDB['results'].concat(JSON.parse(data).results) : JSON.parse(data).results;
            if (counter === categLength) {

              const sampleCategories = sampleDB['results'].reduce((cats, alc) => {
                if (alc.raw.tpcategorie) {
                  if (!cats[alc.raw.tpcategorie.split(' ')[0]]) {
                    cats[alc.raw.tpcategorie.split(' ')[0]] = [];
                  } else if (cats[alc.raw.tpcategorie.split(' ')[0]].indexOf(alc.raw.tpcategorie) < 0) {
                    cats[alc.raw.tpcategorie.split(' ')[0]].push(alc.raw.tpcategorie);
                  }
                } else {
                  cats.noCategoryNames = (cats.noCategoryNames) ? cats.noCategoryNames : [];
                  cats.noCategoryNames.push(alc.Title);
                }
                return cats
              }, {});
              fs.writeFileSync('./' + 'categories' + '.json', util.inspect(JSON.stringify(sampleCategories)), 'utf-8');
            }
          }
        });
      })(key);
    }
  }
});
