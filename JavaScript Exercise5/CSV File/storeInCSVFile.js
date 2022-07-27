const { createCSVObjectArray } = require('./../CSV Object/createCSVObject');

// this places commas with token in csvObject
const placeCommas = (csvObject, token) => {
    return csvObject.replace(new RegExp(`${token}`, 'g'), ',');
}
// this stores array of ID's in csv file
const storeInCSVFile = (sequenceArray) => {
    const CSVObject = createCSVObjectArray(sequenceArray);
    const placeComma = placeCommas(CSVObject);
    const fs = require('fs');
    fs.writeFile(__dirname + '/..' +  '/Sequence.csv', placeComma, () => {});
}
exports.storeInCSVFile = storeInCSVFile;