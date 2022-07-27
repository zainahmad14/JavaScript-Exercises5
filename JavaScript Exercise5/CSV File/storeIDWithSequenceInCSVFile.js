const { createCSVObjectArrayForID } = require('./../CSV Object/createCSVObjectForID');
const { readIDSequenceFromCSVFile }  = require('../CSV File/readIDSequenceFromCSVFile');
const { fileURLToPath } = require('url');

// this places commas with token in csvObject
const placeCommas = (csvObject, token) => {
    return csvObject.replace(new RegExp(`${token}`, 'g'), ',');
}
// this stores array of ID's in csv file
const storeIDWithSequenceInCSVFile = (ID) => {
    readIDSequenceFromCSVFile().then(
        (IDSequenceFromCSVFile) => {
            IDSequenceFromCSVFile = IDSequenceFromCSVFile.split('\n');
            let present = false;
            let currentIndex = 0;
            while (currentIndex < IDSequenceFromCSVFile.length && present == false) {
                if (ID == IDSequenceFromCSVFile[currentIndex++]) {
                    present = true;
                    console.log('ID sequence already present in file');
                    return;
                }
            }
            if (present == false) {
                const CSVObject = createCSVObjectArrayForID(ID);
                let placeComma = placeCommas(CSVObject.slice(3, CSVObject.length - 1) + '\n');
                placeComma = placeComma.replace(/(\r\n|\n|\r)/gm, '') + '\n';
                const fs = require('fs');
                fs.appendFile(__dirname + '/..' +  '/ID_Sequence.csv', placeComma, () => {});
            }
        }
    ).catch(
        (err) => {
            const CSVObject = createCSVObjectArrayForID(ID);
            let placeComma = placeCommas(CSVObject.slice(3, CSVObject.length - 1) + '\n');
            placeComma = placeComma.replace(/(\r\n|\n|\r)/gm, '') + '\n';
            const fs = require('fs');
            fs.appendFile(__dirname + '/..' +  '/ID_Sequence.csv', placeComma, () => {});
         }
    );
}
exports.storeIDWithSequenceInCSVFile = storeIDWithSequenceInCSVFile;