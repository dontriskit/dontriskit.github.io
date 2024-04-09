const fs = require('fs');
const locations = require('./locations_.json')

let names = [];

for (const location of locations) {
  names.push(location['Canonical Name'])
}

fs.writeFileSync('./locations.json', JSON.stringify(names, null, 2));