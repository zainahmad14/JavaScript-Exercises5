const { create3DigitRandomNumber } = require('../Random Number/create3DigitRandomNumber');
const { readFromCSVFile }  = require('../CSV File/readFromCSVFile');
const { createRandomNumberBetween0AndSize} = require('../Random Number/createRandomNumberBetween0AndSize');

// this creates ID
// e.g 'N333SM00000123'
const createID = async (size) => {
    const firstSerialDigit = 'N';
    const first3DigitNumber = '333';
    const secondSerialDigit = 'SM';
    const second3DigitNumber = create3DigitRandomNumber();
    return await readFromCSVFile().then(
        (sequenceString) => {
            // slice removes 'sequence' from seqeunceString 
            // which is stored in first index
            sequenceString = sequenceString.split('\n').slice(1);
            return firstSerialDigit + first3DigitNumber + secondSerialDigit + sequenceString[createRandomNumberBetween0AndSize(sequenceString.length)] + second3DigitNumber;
         }
    );
}

// this creates ID with passed sequence
// e.g passed sequence is '12345'
// then ID is N333SM12345342
const createIDWithPassedSequence = (sequence) => {
    const firstSerialDigit = 'N';
    const first3DigitNumber = '333';
    const secondSerialDigit = 'SM';
    const second3DigitNumber = create3DigitRandomNumber();
    return firstSerialDigit + first3DigitNumber + secondSerialDigit + sequence + second3DigitNumber;
};

exports.createID = createID;
exports.createIDWithPassedSequence = createIDWithPassedSequence;