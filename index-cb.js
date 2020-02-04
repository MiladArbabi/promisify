const fs = require("fs");
const lab = require("./labUtils");

const instructorId = process.argv[2] || "1";
console.log(`in index-cb.js with the instructor id '${instructorId}'`);

fs.readFile("./data/instructors.txt", (err, instructorData) => {
  if (err) {
    console.log(err);
    return -1;
  }
  const instructorNameArray = lab.fileDataToArray(instructorData);
  const instructorName = instructorNameArray[instructorId][1];

  fs.readFile("./data/favoriteRestaurantType.txt", (err2, favRestoData) => {
    if (err2) {
      console.log(err2);
      return -1;
    }
    const favRestoArray = lab.fileDataToArray(favRestoData);
    const typeOfRestaurant = favRestoArray[instructorId][1];

    fs.readFile("./data/addresses.txt", (err3, postalData) => {
      if (err3) {
        console.log(err3);
        return -1;
      }
      const postalArray = lab.fileDataToArray(postalData);
      const postalCode = postalArray[instructorId][1];

      fs.readFile(
        "./data/postalAdressForPostalCode.txt",
        (err4, adressData) => {
          if (err4) {
            console.log(err4);
            return -1;
          }
          const adressArray = lab.fileDataToArray(adressData);
          let postalAdress;
          for (let i = 0; i < adressArray.length; i += 1) {
            if (adressArray[i][0] === postalCode) {
              postalAdress = adressArray[i][1];
              break;
            }
          }
          fs.readFile("./data/restaurantsInArea.txt", (err5, restoData) => {
            if (err5) {
              console.log(err5);
              return -1;
            }
            const restoArray = lab.fileDataToArray(restoData);
            const restos = restoArray
              .filter(
                resto =>
                  resto[0] === postalAdress && resto[1] === typeOfRestaurant
              )
              .map(resto => resto[2]);
            lab.printRestoList(
              instructorName,
              typeOfRestaurant,
              postalAdress,
              restos
            );
          });
        }
      );
    });
  });
});
