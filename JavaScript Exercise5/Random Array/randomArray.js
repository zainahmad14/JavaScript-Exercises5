// this generates randomArray from 0 to size -1 
// e.g size 100000 then randomArray will be 00000 to 99999
const randomArray = (size) => {
    let value = (size - 1).toString();
    let currentIndex = value[value.length - 1];
    while (value[0] != '9') {
        const ascii = value[currentIndex].charCodeAt(0);
        const incrementalValue = String.fromCharCode(ascii + 1);
        if (incrementalValue === '9') {
            value[currentIndex] = 
            currentIndex--;
        }
    }
}

exports.randomArray = randomArray;