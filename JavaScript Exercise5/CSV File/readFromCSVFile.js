// this reads from CSV file asynchronously
// using promises
const readFromCSVFile = async () => {
    const {promises: fsPromises} = require('fs');
    return await fsPromises.readFile('Sequence.csv', 'utf-8');
}
exports.readFromCSVFile = readFromCSVFile;