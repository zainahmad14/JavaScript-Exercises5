// this creats sequence by incrementing digit value
// e.g currentSequence = '00000' then newSequence = '00001'
const createSequence = (currentSequence, lastSequence) => {
    let currentIndex = currentSequence.length - 1;
    let created = false;
    let newSequence = '';
    if (currentSequence === lastSequence) {
        return lastSequence;
    } else {
        const toInt = parseInt(currentSequence) + 1;
        const toStr = toInt.toString();
        if (toStr.length != currentSequence.length) {
            return currentSequence.slice(0, currentSequence.length - toStr.length) + toStr;
        }
        return toStr;
    }
}
exports.createSequence = createSequence;


