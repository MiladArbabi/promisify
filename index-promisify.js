const fs = require('fs');
const lab = require('./labUtils');

const instructorId = process.argv[2] || '1';
console.log(`in index-promisify.js with the instructor id '${instructorId}'`);
