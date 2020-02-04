const fs = require('fs');
const lab = require('./labUtils');

const instructorId = process.argv[2] || '1';
console.log(`in index-promise.js with the instructor id '${instructorId}'`);

const instructorName = new Promise((resolve, reject) => {
  fs.readFile('./data/instructors.txt', (err, instructorData) => {
    if (err) { reject(err); } else {
      const instructorArray = lab.fileDataToArray(instructorData);
      const instructorName = instructorArray[instructorId][1];
      resolve(instructorName);
    }
  });
});

const favoriteRestoType = new Promise((resolve, reject) => {
  fs.readFile('./data/favoriteRestaurantType.txt', (err, favRestoData) => {
    if (err) { reject(err); } else {
      const favRestoArray = lab.fileDataToArray(favRestoData);
      const typeOfRestaurant = favRestoArray[instructorId][1];
      resolve(typeOfRestaurant);
    }
  });
});

const postalCode = new Promise((resolve, reject) => {
  fs.readFile('./data/addresses.txt', (err, postalData) => {
    if (err) { reject(err); } else {
      const postalArray = lab.fileDataToArray(postalData);
      const postalCode = postalArray[instructorId][1];
      resolve(postalCode);
    }
  });
});

const postalAddresses = new Promise((resolve, reject) => {
  fs.readFile('./data/postalAdressForPostalCode.txt', (err, adressData) => {
    if (err) { reject(err); } else {
      const adressArray = lab.fileDataToArray(adressData);
      resolve(adressArray);
    }
  });
});

const restos = new Promise((resolve, reject) => {
  fs.readFile('./data/restaurantsInArea.txt', (err, restoData) => {
    if (err) { reject(err); } else {
      const restoArray = lab.fileDataToArray(restoData);
      resolve(restoArray);
    }
  });
});

Promise.all([instructorName, favoriteRestoType, postalCode, postalAddresses, restos])
  .then((values) => {
    const [name, fav, postal, addresses, allRestaurants] = values;

    const address = addresses.filter((address) => address[0] === postal)[0][1];
    const restaurants = allRestaurants.filter((resto) => resto[0] === address && resto[1] === fav).map((resto) => resto[2]);

    lab.printRestoList(name, fav, address, restaurants);
  });
