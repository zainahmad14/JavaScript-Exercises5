// this reads ID from CSV file asynchronously
// using promises
const readIDFromCSVFile = async () => {
    const {promises: fsPromises} = require('fs');
    return await fsPromises.readFile('ID.csv', 'utf-8');
}
exports.readIDFromCSVFile = readIDFromCSVFile;