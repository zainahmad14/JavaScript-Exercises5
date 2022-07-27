const { readIDFromCSVFile} = require('../CSV File/readIDFromCSVFIle');
const { readFromCSVFile} = require('../CSV File/readFromCSVFile');
const { createIDWithPassedSequence } = require('../ID/createID');
const { storeIDWithSequenceInCSVFile } = require('../CSV File/storeIDWithSequenceInCSVFile');

const findNextID = async (ID) => {
    readIDFromCSVFile().then(
        (IDFromCSVFile) => {
            IDFromCSVFile = IDFromCSVFile.split('\n');
            const lastIDSequence = IDFromCSVFile[IDFromCSVFile.length - 2].slice(6, 11);
            readFromCSVFile().then(
                (sequenceArray) => {
                    sequenceArray = sequenceArray.split('\n');
                    sequenceArray.shift();
                    let currentIndex = 0;
                    let newIDSequence = '';
                    let found = false;
                    while (currentIndex < sequenceArray.length && found == false) {
                        if (sequenceArray[currentIndex++] ==  lastIDSequence) {
                            if (currentIndex + 1 < sequenceArray.length - 1) {
                                newIDSequence = sequenceArray[currentIndex];
                                found = true;
                            } else {
                                console('Sequence has ended');
                                return;
                            }
                        }
                    }
                    const newID = createIDWithPassedSequence(newIDSequence);
                    return storeIDWithSequenceInCSVFile(newID);
                }
            );
            //console.log(IDFromCSVFile.split('\n').length);
        }
    ).catch(
        (err) => {
            console.log('ID has not been stored yet on csv file');
        }
    );
};


// const findNextID = async (ID) => {
//     readIDFromCSVFile().then(
//         (IDFromCSVFile) => {
//             //console.log(IDFromCSVFile);
//             console.log('Before');
//             const lastID = IDFromCSVFile.split('\n')[IDFromCSVFile.length - 1];
//             const sequence = lastID.slice(6, 11);
//             console.log('Sequence is: ', sequence);
//             readFromCSVFile().then(
//                 (sequenceFromCSVFile) => {

//                 }
//             ).catch(
//                 (err) => {
//                     console.log('No sequence has been stored yet');
//                 }
//             );
//         }
//     ).catch(
//         (err) => {
//             console.log('No ID has been stored yet');
//         }
//     );
// }
exports.findNextID = findNextID;