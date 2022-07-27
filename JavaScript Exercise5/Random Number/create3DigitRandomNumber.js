// this creates 3 digit random numbers
// e,g '123'
const create3DigitRandomNumber = () => {
    return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}
exports.create3DigitRandomNumber = create3DigitRandomNumber;