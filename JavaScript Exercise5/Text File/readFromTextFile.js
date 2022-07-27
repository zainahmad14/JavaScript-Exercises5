// this reads from txt file asynchronously
// using promises
const readFromTextFile = async () => {
    const {promises: fsPromises} = require('fs');
    return await fsPromises.readFile('Sequence.txt', 'utf-8');
};
exports.readFromTextFile = readFromTextFile;