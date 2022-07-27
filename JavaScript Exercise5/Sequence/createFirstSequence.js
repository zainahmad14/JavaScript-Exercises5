// this returns first sequence according to size
// e.g size = 100000 then this will return '00000';
const createFirstSequence = (size) => {
    let firstSequence = '';
    let digitCount = 0;
    while (digitCount < size.toString().length - 1) {
        firstSequence += '0';
        digitCount++;
    }
    return firstSequence;
}
exports.createFirstSequence = createFirstSequence;