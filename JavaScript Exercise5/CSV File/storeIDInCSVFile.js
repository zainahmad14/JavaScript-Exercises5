const { createCSVObjectArrayForID } = require('./../CSV Object/createCSVObjectForID');
const { readIDFromCSVFile }  = require('../CSV File/readIDFromCSVFile');
const { fileURLToPath } = require('url');

// this places commas with token in csvObject
const placeCommas = (csvObject, token) => {
    return csvObject.replace(new RegExp(`${token}`, 'g'), ',');
}
// this stores array of ID's in csv file
const storeIDInCSVFile = (ID) => {
    readIDFromCSVFile().then(
        (IDFromCSVFile) => {
            IDFromCSVFile = IDFromCSVFile.split('\n');
            let present = false;
            let currentIndex = 0;
            while (currentIndex < IDFromCSVFile.length && present == false) {
                if (ID == IDFromCSVFile[currentIndex++]) {
                    present = true;
                    console.log('ID already present in file');
                    return;
                }
            }
            if (present == false) {
                const CSVObject = createCSVObjectArrayForID(ID);
                const placeComma = placeCommas(CSVObject.slice(3, CSVObject.length - 1) + '\n');
                const fs = require('fs');
                fs.appendFile(__dirname + '/..' +  '/ID.csv', placeComma, () => {});
            }
        }
    ).catch(
        (err) => {
            const CSVObject = createCSVObjectArrayForID(ID);
            const placeComma = placeCommas(CSVObject.slice(3, CSVObject.length - 1) + '\n');
            const fs = require('fs');
            fs.appendFile(__dirname + '/..' +  '/ID.csv', placeComma, () => {});
         }
    );
}
exports.storeIDInCSVFile = storeIDInCSVFile;