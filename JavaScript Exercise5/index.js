const { createSequenceArray } = require('./Sequence/createSequenceArray');
const { storeInCSVFile} = require('./CSV File/storeInCSVFile');
const { readFromCSVFile } = require('./CSV File/readFromCSVFile');
const { storeInTextFile } = require('./Text File/storeInTextFile');
const { readFromTextFile} = require('./Text File/readFromTextFile');
const { createID } = require('./ID/createID');
const { storeIDInCSVFile } = require('./CSV File/storeIDInCSVFile');
const { findNextID } = require('./ID/findNextID');

const size = 100000;

const sequenceArray = createSequenceArray(100000);

storeInCSVFile(sequenceArray);

storeInTextFile(sequenceArray);

createID().then(
    (ID) => {
        storeIDInCSVFile([ID]);
    }
);

