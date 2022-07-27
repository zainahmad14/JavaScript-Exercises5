// this returns last sequence according to size
// e.g size = 100000 then this will return '99999';
const createLastSequence = (size) => {
    let lastSequence = '';
    let digitCount = 0;
    while (digitCount < size.toString().length - 1) {
        lastSequence += '9';
        digitCount++;
    }
    return lastSequence;
}
exports.createLastSequence = createLastSequence;