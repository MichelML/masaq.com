const fs = require('fs');
let count = 0;

fs.readFile('./samples.json', 'utf8', (err, samples) => {
  if (err) throw err;
  console.log(typeof JSON.parse(JSON.stringify(samples)));return;
  for (sample in JSON.parse(JSON.stringify(samples))) {
    console.log(sample.reduce((cats, alc) => {
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
    }, {}));
  }
});
