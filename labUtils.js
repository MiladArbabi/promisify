const fileDataToArray = (data) => data
  .toString()
  .split('\n')
  .filter((r) => r !== '')
  .map((r) => r.split(','));

const printRestoList = (instructorName, typeOfRestaurant, postalAddress, restos) => {
  const restoString = restos.map((r) => `* ${r}`).join('\n');
  console.log(`Hey ${instructorName}!
You should checkout these ${typeOfRestaurant} restaurants in your hood ${postalAddress}:
${restoString}
`);
};

module.exports = {
  fileDataToArray,
  printRestoList,
};
