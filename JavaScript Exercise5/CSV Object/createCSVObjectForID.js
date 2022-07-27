// this creates CSV object array from array of ID's
const createCSVObjectArrayForID = (ID) => {
    const csvObjectArrayForID = [];
    let currentIndex = 0;
    while (currentIndex < ID.length) {
        const csvObjectForID = {
            'ID': ID[currentIndex++]
        }
        csvObjectArrayForID.push(csvObjectForID);
    }
    // this stores csvArray values in csv 
    const csv = csvObjectArrayForID.map((row) => Object.values(row));
    // this adds csvArray[0] to the beginning of csv
    csv.unshift(Object.keys(csvObjectArrayForID[0]));
    // this return csv after replaceing '\n' with ','
    return `${csv.join('\n').replace(/, /g, '\',\'')};`
}
exports.createCSVObjectArrayForID = createCSVObjectArrayForID;