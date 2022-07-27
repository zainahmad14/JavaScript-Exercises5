// this converts sequence of Array to string
// and then return the string
const convertToString = (sequenceArray) => {
    let sequenceString  = '';
    for (sequence of sequenceArray) {
        sequenceString += sequence + '\n';
    }
    return sequenceString;
}
// this store array of sequence in text file
const storeInTextFile = (sequenceArray) => {
    const fs = require('fs');
    fs.writeFile('Sequence.txt', convertToString(sequenceArray), () => {});
};
exports.storeInTextFile = storeInTextFile;