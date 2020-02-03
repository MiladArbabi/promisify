const fs = require('fs');
const lab = require('./labUtils');

const instructorId = process.argv[2] || '1';
console.log(`in index-cb.js with the instructor id '${instructorId}'`);

fs.readFile('./data/instructors.txt', (err, instructorData) => {
  if(err) {console.log(err); return -1;}

});
