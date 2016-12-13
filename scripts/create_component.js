const fs = require('fs');
const path = require('path');
if (!process.argv[1]) {
  throw "Provide a string argument without any extension to create your component and its related files.\nExample: CheckBox";
}
if (process.argv[2]) {
  throw "You can create only one component at a time. Provide one argument only";
}

const componentPath = path.join('.','components',process.argv[1] + '.js');
const componentTestPath = path.join('.','tests',process.argv[1] + '.test.js');
const componentStylePath = path.join('.','styles',process.argv[1] + '.css');

if (fs.existsSync(componentPath)) {
  throw 'A component already exists with name provided.\nComponent and related files not created';
}

if (fs.existsSync(componentTestPath)) {
  throw 'A test with name ' + componentTestPath.split('/')[2] + ' already exists.\nComponent and related files not created';
}

if (fs.existsSync(componentStylePath)) {
  throw 'A style with name ' + componentStylePath.split('/')[2] + ' already exists.\nComponent and related files not created';
}

fs.writeFile(componentPath, "", function(err) {
  if (err) throw err;
  console.log('path ' + componentPath + ' created.');
}); 

fs.writeFile(componentTestPath, "", function(err) {
  if (err) throw err;
  console.log('path ' + componentTestPath + ' created.');
}); 

fs.writeFile(componentStylePath, "", function(err) {
  if (err) throw err;
  console.log('path ' + componentStylePath + ' created.');
}); 


