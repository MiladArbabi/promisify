const fs = require('fs');
const util = require('util');
const lab = require('./labUtils');

const instructorId = process.argv[2] || '1';
console.log(`in index-promisify.js with the instructor id '${instructorId}'`);

const readFile = util.promisify(fs.readFile);

const nameData = readFile('./data/instructors.txt');
const favoriteRestoTypeData = readFile('./data/favoriteRestaurantType.txt');
const postalCodeData = readFile('./data/addresses.txt');
const postalAddressesData = readFile('./data/postalAdressForPostalCode.txt');
const restosData = readFile('./data/restaurantsInArea.txt');

Promise.all([nameData, favoriteRestoTypeData, postalCodeData, postalAddressesData, restosData])
  .then((values) => {
    const [instructorData, favRestTypeData, postalData, addressData, restoData] = values;

    const name = lab.fileDataToArray(instructorData)[instructorId][1];
    const fav = lab.fileDataToArray(favRestTypeData)[instructorId][1];
    const postal = lab.fileDataToArray(postalData)[instructorId][1];
    const addresses = lab.fileDataToArray(addressData);

    const address = addresses.filter((address) => address[0] === postal)[0][1];
    const allRestaurants = lab.fileDataToArray(restoData);
    const restaurants = allRestaurants.filter((resto) => {
      return resto[0] === address && resto[1] === fav
    }).map((resto) => resto[2]);

    lab.printRestoList(name, fav, address, restaurants);
  })
  .catch((err) => console.log('Failed reading file: ', err));
