// this reads ID from CSV file asynchronously
// using promises
const readIDSequenceFromCSVFile = async () => {
    const {promises: fsPromises} = require('fs');
    return await fsPromises.readFile('ID_Sequence.csv', 'utf-8');
}
exports.readIDSequenceFromCSVFile = readIDSequenceFromCSVFile;