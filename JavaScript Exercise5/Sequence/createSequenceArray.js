const { createFirstSequence } = require('./createFirstSequence');
const { createLastSequence } = require('./createLastSequence');
const { createSequence } = require('./createSequence');

// this creates sequenceArray upto size
// e.g if size = 100000 then sequence will be created from 
// '00000' to '99999'
const createSequenceArray = (size) => {
    const firstSequence = createFirstSequence(size);
    const lastSequence = createLastSequence(size);
    const sequenceArray = [];
    sequenceArray.push(firstSequence);
    let currentSequence = firstSequence;
    while (currentSequence !== lastSequence) 
    {
        currentSequence = createSequence(currentSequence, lastSequence);
        sequenceArray.push(currentSequence);
    }
    return sequenceArray;
}
exports.createSequenceArray = createSequenceArray;