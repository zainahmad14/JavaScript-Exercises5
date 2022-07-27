// this creates CSV object array from array of sequences
const createCSVObjectArray = (sequenceArray) => {
    const csvObjectArray = [];
    let currentIndex = 0;
    while (currentIndex < sequenceArray.length) {
        const csvObject = {
            'sequence': sequenceArray[currentIndex++]
        }
        csvObjectArray.push(csvObject);
    }
    // this stores csvArray values in csv 
    const csv = csvObjectArray.map((row) => Object.values(row));
    // this adds csvArray[0] to the beginning of csv
    csv.unshift(Object.keys(csvObjectArray[0]));
    // this return csv after replaceing '\n' with ','
    return `${csv.join('\n').replace(/, /g, '\',\'')};`
}
exports.createCSVObjectArray = createCSVObjectArray;